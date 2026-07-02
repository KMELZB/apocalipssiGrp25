/** Politique de gestion des cookies — EduTutor IA. */
import LegalScaffold, { type LegalSection } from './LegalScaffold';

const SECTIONS: LegalSection[] = [
  {
    title: "Qu'est-ce qu'un cookie ?",
    hint: 'définition simple à destination des utilisateurs.',
    body: (
      <p>
        Un cookie (ou technologie de stockage équivalente comme le{' '}
        <code className="bg-slate-100 px-1 rounded">localStorage</code>) est un petit fichier déposé
        par le site dans votre navigateur, permettant de conserver certaines informations entre deux
        visites.
      </p>
    ),
  },
  {
    title: 'Cookies et stockage utilisés',
    hint: "lister ce que le site dépose (ex. token d'authentification en localStorage).",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Jeton d'authentification</strong> (localStorage) : maintient votre session
          connectée.
        </li>
        <li>
          <strong>Préférence de thème</strong> (localStorage) : mémorise le mode clair/sombre.
        </li>
        <li>
          <strong>Cookie de session</strong> (sessionid) : utilisé par l'interface d'administration
          et la documentation API.
        </li>
      </ul>
    ),
  },
  {
    title: 'Finalité de chaque cookie',
    hint: "à quoi sert chaque cookie/stockage (technique, mesure d'audience…).",
    body: (
      <p>
        Tous les éléments utilisés sont <strong>strictement nécessaires</strong> au fonctionnement
        du service (authentification, préférence d'affichage, administration). Le site n'utilise{' '}
        <strong>aucun cookie de mesure d'audience ni de publicité</strong>.
      </p>
    ),
  },
  {
    title: 'Consentement',
    hint: 'cookies nécessitant un consentement préalable et comment il est recueilli.',
    body: (
      <p>
        Les cookies et stockages strictement nécessaires ne requièrent pas de consentement préalable
        (art. 82 loi Informatique et Libertés). Aucun traceur soumis à consentement n'étant déposé,
        aucune bannière de consentement n'est nécessaire à ce jour.
      </p>
    ),
  },
  {
    title: 'Durée de conservation',
    hint: 'combien de temps chaque cookie est conservé.',
    body: (
      <p>
        Le jeton d'authentification et la préférence de thème sont conservés jusqu'à la déconnexion
        ou l'effacement du stockage du navigateur. Le cookie de session expire à la fin de la
        session.
      </p>
    ),
  },
  {
    title: 'Gérer ou refuser les cookies',
    hint: 'comment paramétrer ou supprimer les cookies (navigateur, bannière).',
    body: (
      <p>
        Vous pouvez à tout moment supprimer ces éléments via les réglages de votre navigateur
        (effacer les données de site) ou en vous déconnectant. Le refus du stockage nécessaire peut
        toutefois empêcher la connexion au service.
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <LegalScaffold
      title="Politique de gestion des cookies"
      intro="Les cookies et technologies de stockage utilisés par le site, et comment les gérer."
      sections={SECTIONS}
      complete
      lastUpdated="2 juillet 2026"
    />
  );
}
