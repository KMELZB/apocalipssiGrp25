/** Conditions Générales d'Utilisation — EduTutor IA. */
import LegalScaffold, { type LegalSection } from './LegalScaffold';

const SECTIONS: LegalSection[] = [
  {
    title: 'Objet',
    hint: 'ce que régissent ces CGU et le service concerné (EduTutor IA).',
    body: (
      <p>
        Les présentes CGU définissent les conditions d'utilisation du service{' '}
        <strong>EduTutor IA</strong>, plateforme de révision qui génère des quiz à partir de cours
        déposés par l'utilisateur.
      </p>
    ),
  },
  {
    title: 'Acceptation des conditions',
    hint: "comment l'utilisateur accepte les CGU (inscription, usage…).",
    body: (
      <p>
        La création d'un compte et l'utilisation du service valent acceptation pleine et entière des
        présentes CGU. À défaut d'acceptation, l'utilisateur doit renoncer à utiliser le service.
      </p>
    ),
  },
  {
    title: 'Accès au service',
    hint: "conditions d'accès, disponibilité, prérequis techniques.",
    body: (
      <p>
        Le service est accessible via un navigateur web récent et une connexion internet. Il est
        fourni « en l'état », sans garantie de disponibilité continue ; des interruptions peuvent
        survenir (maintenance, incident, montée en charge).
      </p>
    ),
  },
  {
    title: 'Compte utilisateur',
    hint: 'création, responsabilité du mot de passe, exactitude des informations.',
    body: (
      <p>
        L'utilisateur s'engage à fournir des informations exactes et à préserver la confidentialité
        de son mot de passe. Il est responsable des activités réalisées depuis son compte.
      </p>
    ),
  },
  {
    title: 'Comportements interdits',
    hint: 'usages abusifs, contenus illicites, atteinte à la sécurité.',
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Déposer des contenus illicites, diffamatoires ou portant atteinte aux droits de tiers.
        </li>
        <li>
          Tenter de contourner la sécurité ou de détourner le service (ex. injection de prompt).
        </li>
        <li>Perturber le fonctionnement du service ou en faire un usage automatisé abusif.</li>
      </ul>
    ),
  },
  {
    title: 'Contenu généré par IA',
    hint: "limites des quiz générés (peuvent contenir des erreurs), responsabilité de l'utilisateur.",
    body: (
      <p>
        Les quiz sont générés automatiquement par un modèle d'IA et{' '}
        <strong>peuvent contenir des erreurs ou imprécisions</strong>. Ils constituent une aide à la
        révision et ne remplacent pas un contenu pédagogique vérifié. L'utilisateur conserve son
        esprit critique quant aux résultats.
      </p>
    ),
  },
  {
    title: 'Responsabilité',
    hint: "limites de responsabilité de l'éditeur.",
    body: (
      <p>
        S'agissant d'un projet pédagogique fourni sans but lucratif, la responsabilité de l'éditeur
        ne saurait être engagée pour les dommages indirects ou liés à l'usage des quiz générés, dans
        les limites permises par la loi.
      </p>
    ),
  },
  {
    title: 'Propriété intellectuelle',
    hint: "droits sur le service et sur les contenus déposés par l'utilisateur.",
    body: (
      <p>
        Le code source est diffusé sous licence Creative Commons BY-NC-SA 4.0. Les contenus déposés
        par l'utilisateur restent sa propriété ; il concède à l'éditeur le droit de les traiter aux
        seules fins de fournir le service.
      </p>
    ),
  },
  {
    title: 'Modification des CGU',
    hint: 'comment et quand les CGU peuvent évoluer.',
    body: (
      <p>
        L'éditeur peut modifier les présentes CGU pour tenir compte des évolutions du service ou de
        la réglementation. Les utilisateurs sont informés des modifications substantielles.
      </p>
    ),
  },
  {
    title: 'Droit applicable et litiges',
    hint: 'droit applicable et juridiction compétente.',
    body: (
      <p>
        Les présentes CGU sont soumises au <strong>droit français</strong>. À défaut de résolution
        amiable, les tribunaux français sont compétents.
      </p>
    ),
  },
];

export default function CGUPage() {
  return (
    <LegalScaffold
      title="Conditions Générales d'Utilisation"
      intro="Les règles d'utilisation du service EduTutor IA, acceptées par chaque utilisateur."
      sections={SECTIONS}
      complete
      lastUpdated="2 juillet 2026"
    />
  );
}
