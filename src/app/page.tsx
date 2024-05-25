import { getAllArticles } from '@/app/(server)/api';
import { AppLink } from '@/app/shared/components/app-link';
import ArticlePreview from '@/app/ArticlePreview';


export const metadata = {
  title: 'Next from scratch',
  description: 'First steps with Next.js'
}

const ARTICLES_PER_PAGE = 5;

export default async function Home({searchParams}: {searchParams: Record<string, string>}) {
  const allArticles = await getAllArticles();
  const page = Number.parseInt(searchParams['page'] ?? 1);
  const articles = allArticles.slice((page-1)* ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE)
  const nextPageUrl = {search: new URLSearchParams({page: (page + 1).toString()}).toString()}

  return (
    <>
      <h1>Next from scratch, page: {page}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.name}>
            <ArticlePreview  name={article.name} text={article.header}/>
          </li>
        ))}
      </ul>

      <AppLink href={nextPageUrl}>Next</AppLink>
    </>
  );
}
