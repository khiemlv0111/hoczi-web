import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hoczi.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://hoczi.com/signin',
      lastModified: new Date(),
    },
    {
      url: 'https://hoczi.com/signup',
      lastModified: new Date(),
    },
  ]
}