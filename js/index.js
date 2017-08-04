
//set up the 2D sketcher canvas
energyColor = "brown";
ChemDoodle.ELEMENT['S'].jmolColor = '#B9A130';

var sketcher = new ChemDoodle.SketcherCanvas('sketcher', 500, 300, {
	useServices : false,
	oneMolecule : false,
});
sketcher.specs.atoms_displayAllCarbonLabels_2D = false;
sketcher.specs.atoms_displayTerminalCarbonLabels_2D = false;
sketcher.specs.atoms_useJMOLColors = true;
sketcher.specs.atoms_implicitHydrogens_2D = true;
sketcher.specs.atoms_font_size_2D = 14;
sketcher.specs.atoms_font_bold_2D = true;
var rGroupMolFile = '\n  Mrv17f0 07251723482D          \n\n  7  6  0  0  0  0            999 V2000\n   -2.1875   -0.1562    0.0000 R   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.4730    0.2563    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7586   -0.1562    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.4730    1.0813    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7586    1.4938    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0441    0.2563    0.0000 R   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7586    2.3188    0.0000 R   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  2  3  1  0  0  0  0\n  2  4  1  0  0  0  0\n  4  5  1  0  0  0  0\n  3  6  1  0  0  0  0\n  5  7  1  0  0  0  0\nM  END\n$$$$\n';
var rGroup = ChemDoodle.readMOL(rGroupMolFile);
sketcher.loadMolecule(rGroup);
sketcher.repaint();

//set up the 2D structure viewer canvas
var viewACS = new ChemDoodle.ViewerCanvas('resultViewer', 150, 150, {
	
});
viewACS.specs.bonds_width_2D = 1;
viewACS.specs.bonds_saturationWidthAbs_2D = 2.6;
viewACS.specs.bonds_hashSpacing_2D = 2.5;
viewACS.specs.atoms_font_size_2D = 10;
viewACS.specs.atoms_font_families_2D = ['Helvetica', 'Arial', 'sans-serif'];
viewACS.specs.atoms_displayTerminalCarbonLabels_2D = true;
var caffeineMolFile = 'Molecule Name\n  CHEMDOOD08070920033D 0   0.00000     0.00000     0\n[Insert Comment Here]\n 14 15  0  0  0  0  0  0  0  0  1 V2000\n   -0.3318    2.0000    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318    1.0000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -1.1980    0.5000    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    0.5342    0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -1.1980   -0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -2.0640    1.0000    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n    1.4804    0.8047    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    0.5342   -0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -2.0640   -1.0000    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318   -1.0000    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    2.0640   -0.0000    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    1.7910    1.7553    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n    1.4804   -0.8047    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318   -2.0000    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  3  2  1  0  0  0  0\n  4  2  1  0  0  0  0\n  3  5  1  0  0  0  0\n  3  6  1  0  0  0  0\n  7  4  1  0  0  0  0\n  4  8  2  0  0  0  0\n  9  5  2  0  0  0  0\n 10  5  1  0  0  0  0\n 10  8  1  0  0  0  0\n  7 11  1  0  0  0  0\n  7 12  1  0  0  0  0\n 13  8  1  0  0  0  0\n 13 11  2  0  0  0  0\n 10 14  1  0  0  0  0\nM  END\n> <DATE>\n07-08-2009\n';
var caffeine = ChemDoodle.readMOL(caffeineMolFile);
caffeine.scaleToAverageBondLength(14.4);
viewACS.loadMolecule(caffeine);


$(document).ready(function() {

	$("#DSG_Go").click(function() {
		var a = getPredictionParameter(sketcher);
		alert(a.mf + "\n" + a.rGroup + "\n" + a.molFile);
	});

});

function getPredictionParameter(sketcher) {
	var mol = sketcher.getMolecules();
	var molFile = "";
	for (var i = 0; i < mol.length; i++)
	{
		molFile += ChemDoodle.writeMOL(mol[i]) + "\n";
	}
	var mf = $("input:text[name ='formula']").val();
	var rGroup = $("textarea[name ='R_group_input']").val();
	var parameter = {
		mf : mf,
		rGroup : rGroup,
		molFile : molFile
	};
	return parameter;
}

function displayResults(data, status) {
	if (data.indexOf("Error") != -1) {
		alert(data);
	}
	alert(data);
}
