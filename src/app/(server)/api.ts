import articles from './db.json'
import { delayed } from '@/app/(server)/delay';
import { ERRORS } from '@/app/errors';

export function getAllArticles() {
  return delayed(articles)
}

export function getArticleByName(articleName: string) {
  const article = articles.find((x) => x.name === articleName);

  if (!article) {
    throw new Error(ERRORS.NOT_FOUND)
  }

  return delayed(article);
}