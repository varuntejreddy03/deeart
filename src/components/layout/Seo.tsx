import { Helmet } from "react-helmet-async";
import { localBusinessSchema, site } from "@/data/site";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  schema?: Record<string, unknown>;
};

export function Seo({ title, description, path = "/", schema }: SeoProps) {
  const canonical = `https://deeartinteriors.example${path}`;
  const mergedSchema = schema ?? localBusinessSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <script type="application/ld+json">{JSON.stringify(mergedSchema)}</script>
    </Helmet>
  );
}
