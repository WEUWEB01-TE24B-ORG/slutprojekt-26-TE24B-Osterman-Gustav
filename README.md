[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23578331&assignment_repo_type=AssignmentRepo)
# Utvecklingsmiljö

## Installera webbeditorn VS Code

* Installera [VS Code](https://code.visualstudio.com)
* Installera [git-scm](https://git-scm.com)

Vi kan även installera via terminalen:

```powershell
winget install Microsoft.VisualStudioCode
winget install git.git
```
### Intro till *VS Code*

*VS Code* är en fantastisk editor som är gratis och som fungerar på alla plattformar.
Här är en genomgång av *VS Code*:

{% embed url="https://www.youtube.com/watch?v=B-s71n0dHUk&list=PLj6YeMhvp2S5UgiQnBfvD7XgOMKs3O_G6" %}

### Tillägg i VS Code

Här är några tillägg att installera:

* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)

![](<.gitbook/assets/image (108).png>)

### Inställningar i VS Code

För att underlätta arbetet med *VS Code*, gör vi följande inställningar (Settings):

* [Multi-cursor](https://code.visualstudio.com/docs/editor/codebasics#\_multiple-selections-multicursor) – Välj Ctrl-Cmd  
Det här gör att du kan skriva på flera ställen samtidigt i sidan.

![](../.gitbook/assets/image-75.png)

* [Compact folders](https://code.visualstudio.com/updates/v1\_41#\_compact-folders-in-explorer) – Stäng av  
Det här gör att mapparna i sidomenyn inte visas som en lista utan som en trädstruktur.

![](../.gitbook/assets/image-76.png)

* [Code lens](https://code.visualstudio.com/blogs/2017/02/12/code-lens-roundup) - Stäng av  
Det här gör att koden på sidan blir mer kompakt och lättare att läsa.

![](../.gitbook/assets/image-77.png)

### Kortare prompt i Powershell

I terminalen i *VS Code* är prompten väldigt lång.  
Gör följande för att korta ned prompten i Terminalen/Konsolen i *VS Code*.

* Öppna terminalen och skriv/kör dessa rader:

```powershell
test-path $profile
new-item -path $profile -itemtype file -force
code $profile
```

* Skriv in följande i filen och spara:

```powershell
function prompt {
   $p = Split-Path -leaf -path (Get-Location)
   "$p> "
}
```

* I terminalen skriv/kör:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

* Starta om *VS Code*

{% hint style="info" %}
[https://superuser.com/questions/446827/configure-windows-powershell-to-display-only-the-current-folder-name-in-the-shel](https://superuser.com/questions/446827/configure-windows-powershell-to-display-only-the-current-folder-name-in-the-shel)
{% endhint %}

## Komma igång med github

Github är en tjänst för att lagra och dela kod. Du kommer att använda github för att lagra dina projekt och för att lämna in labbar och prov.

* Skapa ett konto på [https://github.com](https://github.com)
  * Döp kontot till: klass-förnamn-efternamn
  * Valfritt lösenord
  * Använd din skolmail

## Webbsnippets

* Skapa User Snippets för webb

```json
{
	"CSS reset": {
		"scope": "css",
		"prefix": "reset",
		"description": "Enkel CSS reset",
		"body": [
			"/* Enkel CSS-reset */",
			"html {",
			"\tbox-sizing: border-box;",
			"}",
			"*, *:before, *:after {",
			"\tbox-sizing: inherit;",
			"}",
			"body, h1, h2, h3, h4, h5, h6, p, ul {",
			"\tmargin: 0;",
			"\tpadding: 0;",
			"}"
		]
	},
	"HTML5_grundkod": {
		"prefix": "html5",
		"description": "HTML5 grundkod",
		"body": [
			"<!DOCTYPE html>",
			"<html lang=\"sv\">",
			"<head>",
			"\t<meta charset=\"utf-8\">",
			"\t<meta name=\"viewport\" content=\"width=device-width, ,initial-scale=1\">",
			"\t<title></title>",
			"\t<link rel=\"stylesheet\" href=\"style.css\">",
			"</head>",
			"<body>",
			"\t${1}",
			"</body>",
			"</html>"
		]
	}
}
```
