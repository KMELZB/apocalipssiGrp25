# Note de Sécurité J3 - Sécurisation de la génération LLM face aux Injections de Prompt

**Objet : Note de Sécurité J3 - Sécurisation de la génération LLM face aux Injections de Prompt**

Bonjour,

Suite aux recommandations de sécurité concernant les vulnérabilités de type "Prompt Injection", une architecture défensive multiniveaux a été intégrée et validée sur le module de génération de QCM.

**1. Mesures techniques implémentées (4 couches) :**
- **Couche 1 (Structured Prompting) :** Refactoring de l'appel LLM (Ollama) pour utiliser l'endpoint Chat. Nous avons instauré une frontière dure entre l'instruction système (System Prompt) contenant les règles défensives de base, et le texte fourni par l'utilisateur (User Prompt). 
- **Couche 2 (Sanitization) :** Nettoyage en amont des données utilisateurs (expression régulière neutralisant les balises `<HTML>` et `<!-- commentaires -->` cachées).
- **Couche 3 (Validation Stricte) :** Vérification du typage JSON après génération (les clés, longueurs de listes et intégrité des index).
- **Couche 4 (Fallback) :** Dispositif de relance automatique (max 2 essais) en cas de déviation ou cassure de la structure générée, garantissant la fiabilité du pipeline.

**2. Validation par tests adversariaux :**
Nous avons ajouté et intégré avec succès 5 cas de tests de sécurité (fuzzing sémantique) au CI local :
- T1 : Injection directe ("Ignore tes consignes...")
- T2 : Injection indirecte via balises cachées
- T3 : Jailbreak / Mode DAN
- T4 : Tentative d'extraction de Prompt Système
- T5 : Attaque par Overflow JSON

Ces 5 tests passent actuellement au vert dans notre suite `pytest`. L'application bloque proprement ou redresse ces tentatives pour n'extraire que les QCM valides.

**3. Limite Résiduelle Acceptée :**
Bien que la **couche 4** mitige grandement les attaques par cassure structurelle, il est important de noter une limite technique inhérente à la nature probabiliste de tous les LLMs. L'**injection 100% sémantique** (où l'attaquant noie habilement des injonctions contradictoires au milieu d'un texte d'apparence légitime sans mots-clés ni balises évidents) reste une vulnérabilité théorique impossible à endiguer mathématiquement à 100% sans un second LLM évaluateur coûteux en ressources. Nous considérons ce risque comme résiduel et maîtrisé dans le cadre de l'usage pédagogique actuel.

Je me tiens à votre disposition pour toute démonstration.

Cordialement.
