import { getRepositories, Repository, RepositoryLanguage, RepositoryRecentEvent, RepositoryTag } from '../../data/gh-statistics/index';

const HomeField = document.querySelector('.css_home_field') as HTMLElement;
const HomeGroupsElement = HomeField.querySelector('.css_home_groups') as HTMLElement;
const RepositoriesGroupElement = HomeGroupsElement.querySelector('.css_home_group[group="repositories"]') as HTMLElement;
const RepositoriesGroupBodyElement = RepositoriesGroupElement.querySelector('.css_home_group_body') as HTMLElement;

function generateElementOfRepository(repo: Repository): HTMLElement {
  function createEventHTML(event: RepositoryRecentEvent) {
    return `<div class="css_home_repository_recent_event" len="${event.length}"><div class="css_home_repository_recent_event_title">${event.title}</div><div class="css_home_repository_recent_event_time">${event.time}</div><a href="${event.url}"><div class="css_home_repository_recent_event_view">View</div></a></div>`;
  }
  function createTagHTML(tag: RepositoryTag) {
    return `<div class="css_home_repository_tag">${tag.name}</div>`;
  }
  function createLanguageHTML(language: RepositoryLanguage) {
    return `<div class="css_home_repository_language"><div class="css_home_repository_language_color" style="--b-cssvar-language-color: ${language.color}"></div>${language.lang}</div>`;
  }
  function getActiveStatus(isActive: boolean) {
    return {
      status: isActive ? '1' : '0',
      text: isActive ? 'Active' : 'Inactive'
    };
  }

  function createOGImage(imageURL: string) {
    return imageURL ? `<img src="${imageURL}">` : '';
  }

  const recentEvents = repo.recent_events.map(createEventHTML).join('');
  const tags = repo.tags.map(createTagHTML).join('');
  const languages = repo.languages.map(createLanguageHTML).join('');
  const { status, text } = getActiveStatus(repo.active);
  const element = document.createElement('div');
  element.classList.add('css_home_repository');
  element.innerHTML = `<div class="css_home_repository_open_graph_image" style="aspect-ratio: ${repo.open_graph_image.size.width} / ${repo.open_graph_image.size.height}">${createOGImage(repo.open_graph_image.url)}</div><div class="css_home_repository_content"><div class="css_home_repository_name">${repo.full_name}</div><div class="css_home_repository_description">${repo.description}</div><div class="css_home_repository_languages">${languages}</div><div class="css_home_repository_active_status" status="${status}">${text}</div><div class="css_home_repository_tags" len="${repo.tags.length}">${tags}</div>${recentEvents}</div><div class="css_home_repository_github"><a href="https://github.com/${repo.full_name}"><div class="css_home_repository_github_link">View on GitHub</div></a></div>`;
  return element;
}

export async function updateHomeField(): void {
  const repositories = await getRepositories(3);

  const fragment = new DocumentFragment();
  for (const repository of repositories) {
    const newElement = generateElementOfRepository(repository);
    fragment.appendChild(newElement);
  }
  RepositoriesGroupBodyElement.append(fragment);
}
