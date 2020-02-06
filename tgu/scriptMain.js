function newTavern() {
	//Tavern Wellness
	var tavernWellness = document.getElementById("tavernWellness");
	var tavernWellnessType = tavernWellness.options[tavernWellness.selectedIndex].value;
 	//Tavern Name
	var tavernTypesRandom = Math.floor(Math.random() * (tavernTypes.length));
	var tavernNameBeginningRandom = Math.floor(Math.random() * (tavernNameBeginning.length));
	var tavernNameEndiningRandom = Math.floor(Math.random() * (tavernNameEndining.length));
	tavernNamesEnding = tavernNameEndining[tavernNameEndiningRandom].substr(tavernNameEndining[tavernNameEndiningRandom].length - 1);	
	if (tavernNamesEnding == 'а') { var tavernNamesEnding = 'а';} 
	else {var tavernNamesEnding = 'ий';}
	document.getElementById('tavernName').innerHTML = tavernTypes[tavernTypesRandom]+' "'+tavernNameBeginning[tavernNameBeginningRandom]+tavernNamesEnding+' '+tavernNameEndining[tavernNameEndiningRandom]+'"';
	//Tavern Logo
	var tavernLogo = tavernNameBeginning[tavernNameBeginningRandom].charAt(0)+tavernNameEndining[tavernNameEndiningRandom].charAt(0);
	var tavernLogoColorR = Math.floor(Math.random() * (tavernLogoColor.length));
	document.getElementById('tavernLogo').innerHTML = tavernLogoColorBefore+tavernLogoColorEnglish[tavernLogoColorR]+'">'+tavernLogo+'</div></div>';
	//Tavern Location
	var tavernLocationRoadRandom = Math.floor(Math.random() * (tavernLocationRoad.length));
	var tavernLocationDirectionRandom = Math.floor(Math.random() * (tavernLocationDirection.length));
	var tavernLocationPoIRandom = Math.floor(Math.random() * (tavernLocationPoI.length));
	var tavernLocationBigPoIRandom = Math.floor(Math.random() * (tavernLocationBigPoI.length));
	var tavernLocationQuantityRandom = Math.floor(Math.random() * (tavernLocationQuantity.length));
	var tavernLocationRacesRandom = Math.floor(Math.random() * (tavernLocationRaces.length));
	var tavernLocationAttitudeRandom = Math.floor(Math.random() * (tavernLocationAttitude.length));
	var tavernLocationNotableRandom = Math.floor(Math.random() * (tavernLocationNotable.length));
	tavernTypesEndingEnding = tavernTypes[tavernTypesRandom].substr(tavernTypes[tavernTypesRandom].length - 1);	
	if (tavernTypesEndingEnding == 'а') { 
		var tavernTypesEndingEnding = 'а';
		var tavernLocationDirectionEnding = 'ою';
	} 
	else {
		var tavernTypesEndingEnding = 'ий';
		var tavernLocationDirectionEnding = 'им';
	}
	document.getElementById('tavernLocation').innerHTML = tavernTypes[tavernTypesRandom]+' знаходиться на '+tavernLocationRoad[tavernLocationRoadRandom]+', на '+tavernLocationDirection[tavernLocationDirectionRandom]+' від '+tavernLocationPoI[tavernLocationPoIRandom]+'. '+tavernTypes[tavernTypesRandom]+' є '+tavernLocationNotable[tavernLocationNotableRandom]+' відом'+tavernLocationDirectionEnding+' мандрівникам, що подорожують до '+tavernLocationBigPoI[tavernLocationBigPoIRandom]+'. Поряд із "'+tavernNameBeginning[tavernNameBeginningRandom]+tavernNamesEnding+' '+tavernNameEndining[tavernNameEndiningRandom]+'" живе '+tavernLocationQuantity[tavernLocationQuantityRandom]+' '+tavernLocationRaces[tavernLocationRacesRandom]+'. Вони '+tavernLocationAttitude[tavernLocationAttitudeRandom]+' привітні до прийдешніх.';
	//Tavern Description
	var tavernDescriptionStoresRandom = Math.floor(Math.random() * (tavernDescriptionStores.length));
	var tavernDescriptionMadeOfRandom = Math.floor(Math.random() * (tavernDescriptionMadeOf.length));
	var tavernDescriptionYardTypeRandom = Math.floor(Math.random() * (tavernDescriptionYardType.length));
	var tavernDescriptionYardStyleRandom = Math.floor(Math.random() * (tavernDescriptionYardStyle.length));
	var tavernDescriptionFenceStyleRandom = Math.floor(Math.random() * (tavernDescriptionFenceStyle.length));
	var tavernDescriptionYardTablesStyleRandom = Math.floor(Math.random() * (tavernDescriptionYardTablesStyle.length));
	var tavernDescriptionYardStoolsRandom = Math.floor(Math.random() * (tavernDescriptionYardStools.length));
	var tavernDescriptionRoomCountRandom = Math.floor(Math.random() * (tavernDescriptionRoomCount.length));
	var tavernDescriptionRoomSizeRandom = Math.floor(Math.random() * (tavernDescriptionRoomSize.length));
	var tavernDescriptionBedsRandom = Math.floor(Math.random() * (tavernDescriptionBeds.length));
	var tavernDescriptionComfortRandom = Math.floor(Math.random() * (tavernDescriptionComfort.length));
 	document.getElementById('tavernDescription').innerHTML = tavernTypes[tavernTypesRandom]+' є '+tavernDescriptionStores[tavernDescriptionStoresRandom]+'поверховою '+tavernDescriptionMadeOf[tavernDescriptionMadeOfRandom]+'будівлею із '+tavernDescriptionYardType[tavernDescriptionYardTypeRandom]+tavernDescriptionYardStyle[tavernDescriptionYardStyleRandom]+' двориком, оточеним'+tavernDescriptionFenceStyle[tavernDescriptionFenceStyleRandom]+' парканом. Над входом висить гарна '+tavernLogoColor[tavernLogoColorR]+' вивіска з літерами '+tavernLogo+'. У дворику є '+tavernDescriptionYardTablesStyle[tavernDescriptionYardTablesStyleRandom]+' столи'+tavernDescriptionYardStools[tavernDescriptionYardStoolsRandom]+'. Тут можна зупинитись в одній з '+tavernDescriptionRoomCount[tavernDescriptionRoomCountRandom]+tavernDescriptionRoomSize[tavernDescriptionRoomSizeRandom]+' кімнат, що мають '+tavernDescriptionBeds[tavernDescriptionBedsRandom]+' ліжка'+tavernDescriptionComfort[tavernDescriptionComfortRandom]+'.';
	//Tavern Keeper	
	var tavernKeeperSexRandom = Math.floor(Math.random() * (tavernKeeperSex.length));
	var tavernKeeperAdverbRandom = Math.floor(Math.random() * (tavernKeeperAdverb.length));
	var tavernKeeperRaceNumber = Math.floor(Math.random() * 4);
	var tavernKeeperNameMaleHumanRandom = Math.floor(Math.random() * (tavernKeeperNameMaleHuman.length));
	var tavernKeeperNameFemaleHumanRandom = Math.floor(Math.random() * (tavernKeeperNameFemaleHuman.length));
	var tavernKeeperNameMaleDwarfRandom = Math.floor(Math.random() * (tavernKeeperNameMaleDwarf.length));
	var tavernKeeperNameFemaleDwarfRandom = Math.floor(Math.random() * (tavernKeeperNameFemaleDwarf.length));
	var tavernKeeperNameMaleElfRandom = Math.floor(Math.random() * (tavernKeeperNameMaleElf.length));
	var tavernKeeperNameFemaleElfRandom = Math.floor(Math.random() * (tavernKeeperNameFemaleElf.length));
	var tavernKeeperNameMaleHalflingRandom = Math.floor(Math.random() * (tavernKeeperNameMaleHalfling.length));
	var tavernKeeperNameFemaleHalflingRandom = Math.floor(Math.random() * (tavernKeeperNameFemaleHalfling.length));
	if (tavernKeeperSexRandom == 1) { 
		var tavernKeeperSexEnding1 = 'ком';
		var tavernKeeperSexEnding2 = 'ий';
		var tavernKeeperSexEnding3 = 'к';
		var tavernKeeperSexEnding4 = 'в';
		var tavernKeeperRace = tavernKeeperRaceMale[tavernKeeperRaceNumber];
	} 
	else {	
		var tavernKeeperSexEnding1 = 'цею';
		var tavernKeeperSexEnding2 = 'а';
		var tavernKeeperSexEnding3 = 'ця';
		var tavernKeeperSexEnding4 = 'ла';
		var tavernKeeperRace = tavernKeeperRaceFemale[tavernKeeperRaceNumber];
	}
	switch (tavernKeeperRaceNumber) {
		case 0://human
		var tavernKeeperName = tavernKeeperNameMaleHuman[tavernKeeperNameMaleHumanRandom];
		if (tavernKeeperSexRandom == 0) { var tavernKeeperName = tavernKeeperNameFemaleHuman[tavernKeeperNameFemaleHumanRandom];} 
		case 1://elf
		var tavernKeeperName = tavernKeeperNameMaleElf[tavernKeeperNameMaleElfRandom];
		if (tavernKeeperSexRandom == 0) { var tavernKeeperName = tavernKeeperNameFemaleElf[tavernKeeperNameFemaleElfRandom];}
		case 2://dwarf
		var tavernKeeperName = tavernKeeperNameMaleDwarf[tavernKeeperNameMaleDwarfRandom];
		if (tavernKeeperSexRandom == 0) { var tavernKeeperName = tavernKeeperNameFemaleDwarf[tavernKeeperNameFemaleDwarfRandom];}
		case 3://halfling
		var tavernKeeperName = tavernKeeperNameMaleHalfling[tavernKeeperNameMaleHalflingRandom];
		if (tavernKeeperSexRandom == 0) { var tavernKeeperName = tavernKeeperNameFemaleHalfling[tavernKeeperNameFemaleHalflingRandom];}
	}
	if (tavernKeeperAdverb[tavernKeeperAdverbRandom] == '') { var tavernKeeperSexEnding2 = '';}
	document.getElementById('tavernInnkeeper').innerHTML = 'Власни'+tavernKeeperSexEnding1+' '+tavernName[tavernTypesRandom]+' є '+tavernKeeperAdverb[tavernKeeperAdverbRandom]+tavernKeeperSexEnding2+' '+tavernKeeperRace+" на ім'я "+tavernKeeperName+'.';
	//Tavern Menu
	//document.getElementById('tavernMenu').innerHTML = 'Власни'+tavernKeeperSexEnding3+' побачи'+tavernKeeperSexEnding4+' вас та підморгну'+tavernKeeperSexEnding4+': <i>"У нас тут, як бачиш, '+tavernMenuTypeWording[tavernWellnessType]+tavernMenuLivingCostAdditional[tavernWellnessType]+', проживання у нас коштує '+tavernMenuLivingCost[tavernWellnessType]+' за ніч."</i><br><ul><li>'+tavernMenuWine[tavernWellnessType]+'</li><li>'+tavernMenuBeer[tavernWellnessType]+'</li><li>'+tavernMenuBread[tavernWellnessType]+'</li><li>'+tavernMenuCheese[tavernWellnessType]+'</li><li>Харчування на один день - '+tavernMenuFood[tavernWellnessType]+'</li></ul>';
	//Tavern Menu New
	var tavernMenuArray = [];
	var tavernWellnessCount = Number(tavernWellnessType);
	var tavernMenuFull ='';
	for (var i = 4; i >= tavernWellnessCount; i--) {
	var tavernMenuFirstR = Math.floor(Math.random() * (tavernMenuFirst.length));
	var tavernMenuSecondR = Math.floor(Math.random() * (tavernMenuSecond.length));
	var tavernMenuThirdR = Math.floor(Math.random() * (tavernMenuThird.length));
	var tavernMenuDrinkR = Math.floor(Math.random() * (tavernMenuDrink.length));
	//names
	var tavernMenuFirstSelectedName = tavernMenuFirst[tavernMenuFirstR].slice(0, -3);
	var tavernMenuSecondSelectedName = tavernMenuSecond[tavernMenuSecondR].slice(0, -3);
	var tavernMenuThirdSelectedName = tavernMenuThird[tavernMenuThirdR].slice(0, -3);
	var tavernMenuDrinkSelectedName = tavernMenuDrink[tavernMenuDrinkR].slice(0, -3);
	//cost in copper
	var tavernMenuFirstSelectedCost = Number(tavernMenuFirst[tavernMenuFirstR].slice(-3));
	var tavernMenuSecondSelectedCost = Number(tavernMenuSecond[tavernMenuSecondR].slice(-3));
	var tavernMenuThirdSelectedCost = Number(tavernMenuThird[tavernMenuThirdR].slice(-3));
	var tavernMenuDrinkSelectedCost = Number(tavernMenuDrink[tavernMenuDrinkR].slice(-3));
	var tavernMenuCostTotal = tavernMenuFirstSelectedCost+tavernMenuSecondSelectedCost+tavernMenuThirdSelectedCost+tavernMenuDrinkSelectedCost;
	if (tavernMenuCostTotal < 10) {
	//cost in copper coins
			var tavernMenuCostTotalCoins = tavernMenuCostTotal+' мідних';
		} else { 
			if (tavernMenuCostTotal < 100) {
		//cost in silver coins
				var tavernMenuCostTotalCoins = tavernMenuCostTotal.toString().slice(0, -1)+' срібних';
				var coinsCopper = tavernMenuCostTotal.toString().slice(-1);
				if (coinsCopper != 0) {
					var tavernMenuCostTotalCoins = tavernMenuCostTotalCoins+' та '+tavernMenuCostTotal.toString().slice(-1)+' мідних';
				}
			} else {
		//cost in gold coins
				var tavernMenuCostTotalCoins = tavernMenuCostTotal.toString().slice(0, -2)+' золотих, '+tavernMenuCostTotal.toString().slice(0, -1)+' см';
				var coinsCopper = tavernMenuCostTotal.toString().slice(-1);
				if (coinsCopper != 0) {
					var tavernMenuCostTotalCoins = tavernMenuCostTotalCoins+' та '+tavernMenuCostTotal.toString().slice(-1)+' мідних';
				}
			}
		}
	this["tavernMenuArray"+i] = '<li>'+tavernMenuFirstSelectedName+''+tavernMenuSecondSelectedName+''+tavernMenuThirdSelectedName+''+tavernMenuDrinkSelectedName+' - '+tavernMenuCostTotalCoins+' монет</li>';
	var tavernMenuFull = tavernMenuFull+this["tavernMenuArray"+i]
	}
	document.getElementById('tavernMenuNew').innerHTML = '<ul>'+tavernMenuFull+'</ul>';
	//Tavern Rumors
	var tavernRumorsRandom1 = Math.floor(Math.random() * (tavernRumors1.length));
	var tavernRumorsRandom2 = Math.floor(Math.random() * (tavernRumors2.length));
	var tavernRumorsRandom3 = Math.floor(Math.random() * (tavernRumors3.length));
	document.getElementById('tavernRumors').innerHTML = '"'+tavernRumors1[tavernRumorsRandom1]+'"<br />"'+tavernRumors2[tavernRumorsRandom2]+'"<br />"'+tavernRumors3[tavernRumorsRandom3]+'"';
}
function pageVersion() {
	document.title = generatorName+' '+generatorVersion;
	}
