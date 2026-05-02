import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultLastModified = new Date();

  return [
    {
      url: 'https://supersolarfence.com/',
      lastModified: defaultLastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://supersolarfence.com/about',
      lastModified: defaultLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://supersolarfence.com/services',
      lastModified: defaultLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://supersolarfence.com/products',
      lastModified: defaultLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://supersolarfence.com/contact',
      lastModified: defaultLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}