/**
 * Gabarit commun aux pages légales (Lot 5).
 *
 * [Note pédagogique] Ces pages fournissent la STRUCTURE (les rubriques
 * attendues). Chaque rubrique peut recevoir un `body` rédigé ; tant qu'une
 * rubrique n'a pas de `body`, son indication (`hint`) reste affichée en gris.
 * Quand une page est complète (`complete`), le bandeau « à compléter » et le
 * lien vers le cours de référence disparaissent.
 */
import type { ReactNode } from 'react';

/** URL du cours de référence sur la réglementation des données. */
export const REGLEMENTATION_URL = 'https://mohamedelafrit.com/teaching/Reglementation_des_Donnees';

export type LegalSection = {
  /** Titre de la rubrique (ce que la loi attend de voir). */
  title: string;
  /** Indication pour l'équipe : quoi écrire dans cette rubrique. */
  hint: string;
  /** Contenu rédigé de la rubrique. Si absent, l'indication reste affichée. */
  body?: ReactNode;
};

type Props = {
  title: string;
  intro: string;
  sections: LegalSection[];
  /** Masque le bandeau « à compléter » une fois la page rédigée. */
  complete?: boolean;
  /** Date de dernière mise à jour affichée en pied de page. */
  lastUpdated?: string;
  /** Contenu libre optionnel ajouté après les rubriques. */
  children?: ReactNode;
};

export default function LegalScaffold({
  title,
  intro,
  sections,
  complete = false,
  lastUpdated,
  children,
}: Props) {
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
      <p className="text-slate-600 mb-6">{intro}</p>

      {/* Bandeau "à compléter" : affiché uniquement tant que la page n'est pas rédigée */}
      {!complete && (
        <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-400 rounded text-sm text-amber-900">
          <p className="font-semibold mb-1">📝 Page à compléter par votre équipe</p>
          <p>
            Ce document est un <strong>modèle vierge</strong>. Remplacez chaque indication en
            italique par le contenu réel de votre projet. Besoin d'aide ?{' '}
            <a
              href={REGLEMENTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 underline hover:no-underline font-medium"
            >
              Consultez le cours « Réglementation des données »
            </a>
            .
          </p>
        </div>
      )}

      <div className="space-y-6">
        {sections.map((section, i) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              {i + 1}. {section.title}
            </h2>
            {section.body ? (
              <div className="text-sm text-slate-700 leading-relaxed space-y-2">{section.body}</div>
            ) : (
              <p className="text-sm text-slate-500 italic">À compléter — {section.hint}</p>
            )}
          </section>
        ))}
      </div>

      {children}

      <p className="text-xs text-slate-400 mt-10 pt-4 border-t border-slate-200">
        Dernière mise à jour : <em>{lastUpdated ?? 'à compléter'}</em>. Document rédigé dans le
        cadre pédagogique APOCAL'IPSSI 2026.
      </p>
    </article>
  );
}
