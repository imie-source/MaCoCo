<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Page d'authentification</title>
		<link rel="stylesheet" href="loginStyleSheet.css">
	</head>
	<body>
		<form class = "formulaire" method="post">
		<div class ="titre">
			<h3>Authentification</h3>
		</div>
		<div class ="corps">	
			<div class = rowTextfield>
				<label for="loginInput" id="loginLabel"> Login : </label>
				<input type="text" id="loginInput" name="loginInput" />
			</div>
			<div class = rowTextfield>
				<label for="pwdInput" id="pwdLabel"> Mot de passe : </label>
				<input type="password" id="pwdInput" name="pwdInput" />
			</div>
			<c:if test="${! empty errorMessage}">
				<div >
					<p class="errorMessage"><c:out value = "${errorMessage}"></c:out></p>
				</div>
			</c:if>
			<div class = rowButton>
				<button type="submit">Valider</button>
			</div>
		</div>
		</form>
	</body>
</html>