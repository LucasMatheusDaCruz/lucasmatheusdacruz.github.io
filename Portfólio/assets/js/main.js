// Função que atualiza as informações de um perfil de usuário
function updateProfileInfo(profileData) {
  // Define um objeto com os elementos da página que devem ser atualizados
  const elements = {
    photo: {
      id: 'profile.photo',
      src: profileData.photo,
      alt: profileData.name
    },
    name: {
      id: 'profile.name',
      text: profileData.name
    },
    job: {
      id: 'profile.job',
      text: profileData.job
    },
    location: {
      id: 'profile.location',
      text: profileData.location
    },
    phone: {
      id: 'profile.phone',
      text: profileData.phone,
      href: `tel:${profileData.phone}`
    },
    email: {
      id: 'profile.email',
      text: profileData.email,
      href: `mailto:${profileData.email}`
    }
  };

  // Percorre os elementos a serem atualizados e atualiza os valores correspondentes na página
  Object.values(elements).forEach(element => {
    // Obtém o elemento da página correspondente ao ID especificado no objeto
    const el = document.getElementById(element.id);
    if (el) {
      if (element.src) {
        // Se o elemento tiver um atributo 'src', atualiza seu valor
        el.src = element.src;
      }
      if (element.alt) {
        // Se o elemento tiver um atributo 'alt', atualiza seu valor
        el.alt = element.alt;
      }
      if (element.text) {
        // Se o elemento tiver um conteúdo de texto, atualiza seu valor
        el.innerText = element.text;
      }
      if (element.href) {
        // Se o elemento tiver um atributo 'href', atualiza seu valor
        el.href = element.href;
      }
    }
  });
}

function updateSoftSkills(profileData) {
  // Obtém o elemento HTML que representa as soft skills do perfil
  const softSkills = document.getElementById('profile.skills.softSkills');
  // Obtém as habilidades do objeto profileData ou define um objeto vazio com a propriedade softSkills vazia
  const skills = profileData.skills || { softSkills: [] };
  // Define o conteúdo HTML para as soft skills
  softSkills.innerHTML = skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
  // Obtém o elemento HTML que representa as hard skills do perfil
  const hardSkills = document.getElementById('profile.skills.hardSkills');
  // Define o conteúdo HTML para as hard skills
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><a href="${skill.url}" target="_blank"><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></a></li>`).join('');
}

function updateLanguages(profileData) {
  // Obtém o elemento HTML que representa as linguagens do perfil
  const languages = document.getElementById('profile.languages');
  // Define o conteúdo HTML para as linguagens
  languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

// A função 'updatePortfolio' atualiza a seção do portfólio do perfil com os projetos fornecidos em 'profileData'
function updatePortfolio(profileData) {
  // Obtém o elemento HTML da seção do portfólio
  const portfolio = document.getElementById('profile.portfolio');
  // Define o conteúdo HTML da seção do portfólio, usando os projetos fornecidos em 'profileData'
  portfolio.innerHTML = profileData.portfolio.map(project => {
    // Cria uma nova entrada de projeto, com um título 'h3' que exibe o nome do projeto
    // Se o projeto tiver uma propriedade 'github' definida como 'true', adiciona a classe 'github' e o evento 'onclick' para abrir o link no GitHub
    // Caso contrário, adiciona apenas o evento 'onclick' para abrir o link do projeto
    return `
      <li>
        <h3 ${project.github ? 'class="github" onclick="goToUrl(\'' + project.url + '\', event)"' : 'onclick="goToUrl(\'' + project.url + '\', event)"'}>${project.name}</h3>
      </li>
    `;
  }).join('');
}

// A função 'goToUrl' abre uma nova aba do navegador com o URL fornecido
function goToUrl(url, event) {
  // Impede o comportamento padrão do evento (abrir o link na mesma página)
  event.preventDefault();
  // Abre o link na nova aba do navegador, usando o método 'window.open'
  window.open(url, '_blank');
}

// função para atualizar a seção de serviços
function updateServices(profileData) {
  // busca o elemento HTML que representa a seção de serviços
  const services = document.getElementById('profile.services');

  // atualiza o conteúdo do elemento com base nos dados do perfil
  services.innerHTML = profileData.services.map(service => {
    return `
      <li>
        <h3 class="title">${service.name}</h3>
        <p>${service.description}</p>
      </li>
    `;
  }).join('');
}

// função assíncrona autoexecutável que busca os dados do perfil, atualiza a página com os dados e os serviços
(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateServices(profileData);
})();
