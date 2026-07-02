/** Mentions légales — EduTutor IA (projet pédagogique APOCAL'IPSSI 2026). */
import LegalScaffold, { type LegalSection } from './LegalScaffold';

const SECTIONS: LegalSection[] = [
  {
    title: 'Éditeur du site',
    hint: "nom de l'organisation/équipe, statut, adresse, email de contact.",
    body: (
      <>
        <p>
          Le site <strong>EduTutor IA</strong> est édité par l'<strong>Équipe 25</strong> dans le
          cadre du projet pédagogique APOCAL'IPSSI 2026 (IPSSI). Il s'agit d'un projet étudiant à
          but non lucratif, sans exploitation commerciale.
        </p>
        <p>
          Adresse : [adresse de l'établissement à compléter] — Contact : contact@edututor.fr
          [adresse à confirmer par l'équipe].
        </p>
      </>
    ),
  },
  {
    title: 'Directeur de la publication',
    hint: 'nom de la personne responsable du contenu publié.',
    body: (
      <p>
        Le directeur de la publication est le représentant de l'Équipe 25 [nom du responsable
        d'équipe à compléter], joignable à l'adresse contact@edututor.fr.
      </p>
    ),
  },
  {
    title: 'Hébergeur',
    hint: "nom, adresse et téléphone de l'hébergeur du site.",
    body: (
      <p>
        En environnement de développement, l'application est exécutée localement via Docker. En
        production, l'hébergement est assuré par [hébergeur à compléter — ex. OVHcloud SAS, 2 rue
        Kellermann, 59100 Roubaix, France, +33 9 72 10 10 07].
      </p>
    ),
  },
  {
    title: 'Propriété intellectuelle',
    hint: 'à qui appartiennent les textes, logos, code, contenus.',
    body: (
      <>
        <p>
          Le kit de démarrage et le code source sont diffusés sous licence{' '}
          <strong>Creative Commons BY-NC-SA 4.0</strong> (auteur original : Mohamed Amine EL AFRIT).
          Les développements réalisés par l'Équipe 25 restent soumis à cette même licence.
        </p>
        <p>
          Les contenus déposés par un utilisateur (documents de cours, textes) restent la propriété
          de leur auteur. L'utilisateur reste responsable des contenus qu'il téléverse.
        </p>
      </>
    ),
  },
  {
    title: 'Contact',
    hint: 'comment vous joindre pour toute question juridique.',
    body: (
      <p>
        Pour toute question juridique ou relative aux données personnelles : contact@edututor.fr.
        Les demandes relatives au RGPD sont traitées selon la{' '}
        <a href="/legal/confidentialite" className="text-indigo-700 underline hover:no-underline">
          politique de confidentialité
        </a>
        .
      </p>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <LegalScaffold
      title="Mentions légales"
      intro="Informations légales obligatoires identifiant l'éditeur et l'hébergeur du site."
      sections={SECTIONS}
      complete
      lastUpdated="2 juillet 2026"
    />
  );
}
