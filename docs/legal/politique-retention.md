# Politique de rétention des données — EduTutor IA

**Projet :** EduTutor IA — APOCAL'IPSSI 2026 · Équipe 25
**Version :** 1.0 · **Date :** 2 juillet 2026
**Responsable du traitement :** Équipe 25 · contact@edututor.fr *(à confirmer)*

> Document produit dans le cadre de la perturbation **J3-bis (RGPD / SAR)**.
> Il complète la politique de confidentialité et l'endpoint d'export des données (Art. 15).

---

## 1. Durées de conservation

Le principe RGPD (Art. 5.1.e) impose de ne conserver les données que le temps
nécessaire aux finalités poursuivies.

| Catégorie de données | Durée de conservation | Justification |
|---|---|---|
| Compte utilisateur (email, nom, prénom, mot de passe haché) | Toute la durée de vie du compte | Nécessaire à la fourniture du service |
| Contenus déposés (PDF / textes de cours) | Toute la durée de vie du compte | Génération et consultation des quiz |
| Quiz, réponses, scores, historique | Toute la durée de vie du compte | Suivi de progression |
| Compte inactif | Suppression / anonymisation après **24 mois** d'inactivité | Minimisation des données |
| Journaux techniques (logs) | **12 mois** maximum | Sécurité et diagnostic |
| Registre des demandes RGPD (`DataRequest`) | **3 ans** | Preuve de conformité (accountability) |

*Les durées ci-dessus sont des valeurs de référence, ajustables par l'équipe
selon la politique définitive de l'établissement.*

---

## 2. Base légale de la conservation

- **Exécution du service** (RGPD Art. 6.1.b) : compte, contenus et historique
  sont conservés pour fournir la fonctionnalité demandée par l'utilisateur.
- **Obligation d'accountability** (RGPD Art. 5.2) : la trace des demandes
  d'accès (SAR) est conservée pour démontrer le respect des droits.
- **Intérêt légitime** (RGPD Art. 6.1.f) : les journaux techniques sont
  conservés à des fins de sécurité, pour une durée limitée.

Aucune donnée n'est conservée au-delà de ce qui est nécessaire à ces finalités.

---

## 3. Modalités de suppression

- **À l'initiative de l'utilisateur :** depuis la page **Profil**, la
  suppression du compte déclenche un effacement **définitif** (hard delete) du
  compte et de toutes les données liées (quiz, réponses, historique) via la
  suppression en cascade (`on_delete=CASCADE`).
- **Export préalable :** avant toute suppression, l'utilisateur peut exercer son
  droit à la portabilité (Art. 15/20) en exportant ses données (JSON ou CSV)
  depuis son profil.
- **Suppression automatique :** les comptes inactifs au-delà de la durée définie
  sont supprimés ou anonymisés lors d'une purge périodique.
- **Sous-traitants :** en cas de recours à un fournisseur LLM cloud, aucune
  donnée personnelle n'est conservée durablement chez le fournisseur au-delà du
  traitement de la requête (configuration par défaut : **LLM local**, aucune
  sortie de donnée).

---

*Ce document est conservé dans `docs/legal/` et référencé par la politique de
confidentialité du site.*
