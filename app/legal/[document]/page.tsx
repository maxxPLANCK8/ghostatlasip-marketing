import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";

const legalDocuments = {
  terms: {
    title: "Terms of Service",
    file: "terms-of-service.md",
  },
  privacy: {
    title: "Privacy Policy",
    file: "privacy-policy.md",
  },
  "acceptable-use": {
    title: "Acceptable Use Policy",
    file: "acceptable-use-policy.md",
  },
} as const;

type LegalDocument = keyof typeof legalDocuments;

type LegalPageParams = {
  params: {
    document: string;
  };
};

function isLegalDocument(document: string): document is LegalDocument {
  return document in legalDocuments;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(legalDocuments).map((document) => ({ document }));
}

export function generateMetadata({ params }: LegalPageParams): Metadata {
  if (!isLegalDocument(params.document)) {
    return {};
  }

  const { title } = legalDocuments[params.document];

  return {
    title: `${title} | GhostatlasIP`,
    description: `${title} for the GhostatlasIP proxy service.`,
  };
}

export default async function LegalDocumentPage({ params }: LegalPageParams) {
  if (!isLegalDocument(params.document)) {
    notFound();
  }

  const { file } = legalDocuments[params.document];
  const content = await readFile(path.join(process.cwd(), "content", "legal", file), "utf8");

  return <LegalPage content={content} />;
}
