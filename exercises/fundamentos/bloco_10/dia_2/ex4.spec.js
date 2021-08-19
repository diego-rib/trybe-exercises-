const getRepos = require('./ex4.js');

describe('Testa função getRepos', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  
  it('Testa se o repositório "sd-01-week4-5-project-todo-list" está listado', async () => {
    expect.assertions(2);
    const repos = await getRepos(url);
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  });
});
