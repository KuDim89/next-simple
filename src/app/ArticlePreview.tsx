'use client';

import { useState } from 'react';
import { AppLink } from '@/app/shared/components/app-link';
import { ROUTING } from '@/app/routing';
import { articleStorage } from '@/app/ArticleStorage';


type ArticlePreviewProps = {
  name: string;
  text: string;
}

export default function ArticlePreview({name, text}: ArticlePreviewProps) {
  const [liked, setLiked] = useState(articleStorage.liked(name));

 /* useEffect(() => {
    const likeKey = getLikeKey(name);
    const likeValue = localStorage.getItem(likeKey)
    setLiked(likeValue === 'like')
  }, [name])*/

  const like = () => {
    articleStorage.like(name)
    setLiked(!liked)
  }
  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={like} type="button" suppressHydrationWarning>{liked ? '👍' : 'like'}</button>
    </>
  )
}
