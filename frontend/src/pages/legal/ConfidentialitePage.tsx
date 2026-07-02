/** Politique de confidentialité — EduTutor IA (RGPD). */
import LegalScaffold, { type LegalSection } from './LegalScaffold';

const SECTIONS: LegalSection[] = [
  {
    title: 'Responsable du traitement',
    hint: 'qui décide pourquoi et comment les données sont traitées.',
    body: (
      <p>
        Le responsable du traitement est l'<strong>Équipe 25</strong>, éditrice d'EduTutor IA
        (projet pédagogique APOCAL'IPSSI 2026). Contact : contact@edututor.fr [à confirmer par
        l'équipe].
      </p>
    ),
  },
  {
    title: 'Données personnelles collectées',
    hint: 'email, nom, prénom, documents envoyés, historique de quiz…',
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Données de compte : adresse email, nom, prénom, mot de passe (stocké chiffré/haché).
        </li>
        <li>Contenus déposés : documents de cours (PDF) et textes soumis pour générer des quiz.</li>
        <li>Données d'usage : quiz générés, réponses données, scores, dates, historique.</li>
        <li>Données techniques : jeton d'authentification stocké dans le navigateur.</li>
      </ul>
    ),
  },
  {
    title: 'Finalités du traitement',
    hint: 'pourquoi vous collectez ces données (créer un compte, générer des quiz…).',
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Créer et gérer le compte utilisateur (inscription, connexion, profil).</li>
        <li>Générer des quiz à partir des cours et corriger les réponses.</li>
        <li>Afficher l'historique et les statistiques de progression.</li>
        <li>
          Envoyer les emails de service (validation d'email, réinitialisation de mot de passe).
        </li>
      </ul>
    ),
  },
  {
    title: 'Base légale',
    hint: 'consentement, contrat, intérêt légitime… (RGPD art. 6).',
    body: (
      <p>
        Le traitement repose sur l'<strong>exécution du service</strong> demandé par l'utilisateur
        (contrat, art. 6.1.b) pour la gestion du compte et la génération de quiz, et sur le{' '}
        <strong>consentement</strong> (art. 6.1.a) pour les traitements optionnels. L'utilisateur
        peut retirer son consentement à tout moment.
      </p>
    ),
  },
  {
    title: 'Durée de conservation',
    hint: 'combien de temps les données sont gardées, puis supprimées/anonymisées.',
    body: (
      <p>
        Les données sont conservées tant que le compte est actif. Elles sont supprimées lors de la
        suppression du compte par l'utilisateur, ou après une période d'inactivité prolongée. Le
        détail figure dans la{' '}
        <span className="font-medium">politique de rétention des données</span> de l'équipe
        (docs/legal).
      </p>
    ),
  },
  {
    title: 'Destinataires des données',
    hint: 'qui y a accès (équipe, sous-traitants, fournisseurs LLM…).',
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>L'équipe éditrice, pour l'exploitation et le support du service.</li>
        <li>
          Le fournisseur d'IA : par défaut un modèle <strong>local (Ollama)</strong>, aucune donnée
          ne sort du serveur. Si un fournisseur cloud est activé, les contenus envoyés lui sont
          transmis pour générer les quiz.
        </li>
        <li>Le prestataire d'envoi d'emails (Brevo) pour les emails de service.</li>
      </ul>
    ),
  },
  {
    title: 'Transferts hors UE',
    hint: 'si un fournisseur cloud héberge les données hors Union européenne.',
    body: (
      <p>
        En configuration par défaut (LLM local), <strong>aucun transfert hors UE</strong> n'a lieu.
        Si un fournisseur LLM cloud hors UE est activé par l'administrateur, les contenus concernés
        peuvent être transférés hors Union européenne, encadrés par les garanties appropriées
        (clauses contractuelles types).
      </p>
    ),
  },
  {
    title: 'Vos droits',
    hint: 'accès, rectification, suppression, portabilité, opposition, et comment les exercer.',
    body: (
      <>
        <p>
          Conformément au RGPD, vous disposez des droits d'accès (art. 15), de rectification (art.
          16), d'effacement (art. 17), de limitation (art. 18), de portabilité (art. 20) et
          d'opposition (art. 21).
        </p>
        <p>
          Depuis votre <strong>profil</strong>, vous pouvez exporter vos données (JSON ou CSV) et
          supprimer définitivement votre compte. Pour toute autre demande : contact@edututor.fr.
        </p>
      </>
    ),
  },
  {
    title: 'Cookies',
    hint: 'renvoi vers la politique de cookies du site.',
    body: (
      <p>
        Le site utilise un stockage local strictement nécessaire au fonctionnement (jeton de
        connexion). Détails dans la{' '}
        <a href="/legal/cookies" className="text-indigo-700 underline hover:no-underline">
          politique de gestion des cookies
        </a>
        .
      </p>
    ),
  },
  {
    title: 'Contact & réclamation',
    hint: 'email du référent données + droit de réclamation auprès de la CNIL.',
    body: (
      <p>
        Référent données : contact@edututor.fr. Vous pouvez également introduire une réclamation
        auprès de la <strong>CNIL</strong> (www.cnil.fr) si vous estimez que vos droits ne sont pas
        respectés.
      </p>
    ),
  },
];

export default function ConfidentialitePage() {
  return (
    <LegalScaffold
      title="Politique de confidentialité"
      intro="Comment les données personnelles des utilisateurs sont collectées, utilisées et protégées (RGPD)."
      sections={SECTIONS}
      complete
      lastUpdated="2 juillet 2026"
    />
  );
}
