# Nom du fichier zip de sortie
OUTPUT_ZIP := $(shell date +"archive_%Y%m%d_%H%M%S.zip")

# Liste des fichiers et dossiers à inclure dans l'archive
FILES_TO_ZIP := \
	src \
	public \
	index.html \
	package.json \
	vite.config.js \
	pnpm-lock.yaml \
	.prettier.cjs \
	.eslintrc.cjs \
	.gitignore \
	Makefile \

# Dossier temporaire pour la création de l'archive
TEMP_DIR := $(shell date +".archive_%s%N")

# Commande pour créer un dossier (gère les cas où le dossier existe déjà)
MKDIR := mkdir -p

# Commande pour supprimer un dossier et son contenu
RM := rm -rf

# Commande zip (assurez-vous que 'zip' est installé sur votre système)
ZIP := zip -r

.PHONY: zip clean

zip: $(OUTPUT_ZIP)

$(OUTPUT_ZIP):
	@echo "Création du dossier temporaire: $(TEMP_DIR)"
	$(MKDIR) $(TEMP_DIR)

	@echo "Copie des fichiers et dossiers dans le dossier temporaire..."
	$(foreach file,$(FILES_TO_ZIP),cp -r $(file) $(TEMP_DIR)/;)

	@echo "Création de l'archive ZIP: $(OUTPUT_ZIP)"
	(cd $(TEMP_DIR) && $(ZIP) ../$(OUTPUT_ZIP) .)  #On se place dans le temp dir pour zipper à partir de là

	@echo "Nettoyage du dossier temporaire..."
	$(RM) $(TEMP_DIR)

	@echo "Archive ZIP créée avec succès: $(OUTPUT_ZIP)"

clean:
	@echo "Suppression de l'archive ZIP..."
	$(RM) $(OUTPUT_ZIP)
	@echo "Suppression terminée."
	
#Exemple d'utilisation:
# make zip 		Pour créer l'archive.
# make clean      Pour nettoyer (supprimer l'archive)