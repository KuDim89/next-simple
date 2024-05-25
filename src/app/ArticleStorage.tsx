'use client';

export const getLikeKey = (articleName: string) => `Next_from_scratch_like_${articleName}`

class ArticleStorage {
  private get storage() {
    return localStorage;
  }

  private get isStorageReady() {
    return 'localStorage' in globalThis;
  }


  like(articleName: string) {
    const likeKey = getLikeKey(articleName);
    this.storage.setItem(likeKey, 'like')
  }

  liked(articleName: string): boolean {
    if(!this.isStorageReady) return false

    const likeKey = getLikeKey(articleName);
    return this.storage.getItem(likeKey) === 'like'
  }
}
export const articleStorage = new ArticleStorage();