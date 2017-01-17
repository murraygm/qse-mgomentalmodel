/*globals define*/
define(["jquery","text!./MGOMentalModel.css", "https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"], 
function($, cssContent, WebFont) {'use strict';
	$("<style>").html(cssContent).appendTo("head");
	return {
		initialProperties: {
			version: 1.6,
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [{
					qWidth: 5,
					qHeight: 2000
				}]
			}
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions",
					min : 3,
					max: 4

				},
				measures: {
					uses: "measures",
					min : 0,
					max: 1

				},
				sorting: {
					uses: "sorting"
				},
				mentalmodel: {
					label:"Mental Model",
					component: "expandable-items",
					items: {
					ModelOrientation: {
						type:"items",
						label:"Shape",
						items: {
							customTowerWidth : {
								ref : "qDef.customTowerWidth",
								label : "Set width of Towers in horizonal model",
								type : "boolean",
								defaultValue : false
								},
							mmStyleTowerWidth : {
								ref : "qDef.mmStyleTowerWidth",
								label: "Tower width (px)",
								type: "number",
								expression: "optional",
								defaultValue: 250,
								show: function(layout) { return layout.qDef.customTowerWidth } 
								},
							customOrientation : {
								ref : "qDef.custOrientationOn",
								label : "Force model orientation",
								type : "boolean",
								defaultValue : false
								},
							orientation : {
								ref: "qDef.custOrientationVal",
								type: "boolean",
								component: "buttongroup",
								label: "Select orientation",
								options: [{
									value: false,
									label: "Horz",
									tooltip: "Stack side by side"
								}, {
									value: true,
									label: "Vert",
									tooltip: "Stack on top of each other"
								}],
								defaultValue: true,
								show: function(layout) { return layout.qDef.custOrientationOn } 
								},
							orientationV : {
								ref: "qDef.custOrientationValV",
								type: "boolean",
								component: "buttongroup",
								label: "Set vertical alignment of towers",
								options: [{
									value: false,
									label: "Bottom",
									tooltip: "Align to bottom"
								}, {
									value: true,
									label: "Top",
									tooltip: "Align to top"
								}],
								defaultValue: false,
								show: function(layout) { if(!layout.qDef.custOrientationVal & layout.qDef.custOrientationOn){ return true } else { return false }} 
								},
							customWidth : {
								ref : "qDef.customWidthOn",
								label : "Set width of Horizonal model",
								type : "boolean",
								defaultValue : false,
								show: function(layout) { return layout.qDef.custOrientationOn } 
								},
							mmStyleWidth : {
								ref : "qDef.mmStyleWidth",
								label: "Model width (px)",
								type: "number",
								expression: "optional",
								defaultValue: 30000,
								show: function(layout) { if(layout.qDef.customWidthOn & layout.qDef.custOrientationOn){ return true } else { return false }} 
								},
							mmForceScale : {
								ref : "qDef.mmForceScaleOn",
								component: "buttongroup",
								label : "Set a default zoom level for the model",
								type : "boolean",
								options: [{
									value: false,
									label: "Fit to height",
									tooltip: "Align to bottom"
								}, {
									value: true,
									label: "Set scale",
									tooltip: "Align to top"
								}],
								defaultValue : false
								},
							mmForceScaleVal : {
								ref : "qDef.mmForceScaleVal",
								label : "Default zoom",
								type: "string",
								component: "dropdown",
								options: [{
									value: "0.1",
									label: "10%"
								},{
									value: "0.2",
									label: "20%"
								},{
									value: "0.3",
									label: "30%"
								},{
									value: "0.4",
									label: "40%"
								},{
									value: "0.5",
									label: "50%"
								},{
									value: "0.6",
									label: "60%"
								},{
									value: "0.7",
									label: "70%"
								},{
									value: "0.8",
									label: "80%"
								},{
									value: "0.9",
									label: "90%"
								},{
									value: "1",
									label: "100%"
								},{
									value: "1.1",
									label: "110%"
								},{
									value: "1.2",
									label: "120%"
								},{
									value: "1.3",
									label: "130%"
								},{
									value: "1.4",
									label: "140%"
								},{
									value: "1.5",
									label: "150%"
								},{
									value: "1.6",
									label: "160%"
								},{
									value: "1.7",
									label: "170%"
								},{
									value: "1.8",
									label: "180%"
								},{
									value: "1.9",
									label: "190%"
								},{
									value: "2.0",
									label: "200%"
								}],
								defaultValue : "1",
								show: function(layout) { return layout.qDef.mmForceScaleOn } 
								}
							}
						},
					ModelSelection: {
						type:"items",
						label:"Selection",
						items: {
							selectionSpaces : {
								ref : "qDef.selectionSpaces",
								label : "Make Spaces selectable",
								type : "boolean",
								defaultValue : false
								},
							selectionTowers : {
								ref : "qDef.selectionTowers",
								label : "Make Towers selectable",
								type : "boolean",
								defaultValue : true
								},
							selectionBoxes : {
								ref : "qDef.selectionBoxes",
								label : "Make Boxes selectable",
								type : "boolean",
								defaultValue : false
								}
							}
						},	
					ModelMeasure: {
						type:"items",
						label:"Additional data",
						items: {
							mmShowMeasure : {
								ref : "qDef.mmShowMeasure",
								label : "Display measure values on model",
								type : "boolean",
								defaultValue : true
								},
							mmShowDim4 : {
								ref : "qDef.mmShowDim4",
								label : "Display 4th dimension values on model",
								type : "boolean",
								defaultValue : true
								},
							mmShowDim4LinkTog : {
								ref : "qDef.mmShowDim4LinkTog",
								label : "Use 4th dimension value as URL",
								type : "boolean",
								defaultValue : false,
								show: function(layout) { return layout.qDef.mmShowDim4 } 
								},
							mmColourUse : {
								ref: "qDef.mmColourUse",
								type: "string",
								component: "buttongroup",
								label: "Color by (will override custom colors):",
								options: [{
									value: "M",
									label: "Measure",
									tooltip: "Colour boxes by measure"
								}, {
									value: "D",
									label: "Dimension",
									tooltip: "Colour boxes by 4th Dimension"
								}, {
									value: "N",
									label: "None",
									tooltip: "None"
								}],
								defaultValue: "N"
								},	
							mmColourTarg : {
								ref: "qDef.mmColourTarg",
								type: "string",
								component: "buttongroup",
								label: "Items to color by the data:",
								options: [{
									value: "B",
									label: "Boxes",
									tooltip: "Colour boxes"
								}, {
									value: "T",
									label: "Towers",
									tooltip: "Colour towers"
								}],
								defaultValue: "B",
								show: function(layout) { if(layout.qDef.mmColourUse == "M"){ return true } else { return false }} 
								},
							mmTowerTotals : {
								ref: "qDef.mmTowerTotals",
								type: "string",
								component: "buttongroup",
								label: "Tower totals are based on Box values (not directly measure linked):",
								options: [{
									value: "S",
									label: "Sum",
									tooltip: "Sum"
								}, {
									value: "A",
									label: "Average",
									tooltip: "Average"
								}],
								defaultValue: "S",
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & layout.qDef.mmColourTarg == "T"){ return true } else { return false }} 
								},	
							mmCustomRangeOn : {
								ref: "qDef.mmCustomRangeOn",
								type: "boolean",
								component: "switch",
								label: "Range",
								options: [{
									value: true,
									label: "Auto"
								}, {
									value: false,
									label: "Custom"
								}],
								defaultValue: true,
								show: function(layout) { if(layout.qDef.mmColourUse == "M"){ return true } else { return false }} 					
								},
							mmCustomRangeMin : {
								ref : "qDef.mmCustomRangeMin",
								label: "Min",
								type: "number",
								expression: "optional",
								defaultValue: 0,
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & !layout.qDef.mmCustomRangeOn){ return true } else { return false }} 
								},
							mmCustomRangeMax : {
								ref : "qDef.mmCustomRangeMax",
								label: "Max",
								type: "number",
								expression: "optional",
								defaultValue: 5,
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & !layout.qDef.mmCustomRangeOn){ return true } else { return false }} 
								},
							mmShowDim4LegendOn : {
								ref : "qDef.mmShowDim4LegendOn",
								label : "Show legend",
								type : "boolean",
								defaultValue : true,
								show: function(layout) { if(layout.qDef.mmColourUse != "N"){ return true } else { return false }} 					
								},
							mmShowDim4CustColOn : {
								ref : "qDef.mmShowDim4CustomCol",
								label : "Use up to 10 colors for Dimension 4 (HEX)",
								type : "boolean",
								defaultValue : false,
								show: function(layout) { if(layout.qDef.mmColourUse == "D"){ return true } else { return false }} 
								},
							mmShowDim4CustColTxt : {
								ref : "qDef.mmShowDim4CustColTxt",
								label: "Text colour for boxes (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv1 : {
								ref : "qDef.mmShowDim4CustColv1",
								label: "1st box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv2 : {
								ref : "qDef.mmShowDim4CustColv2",
								label: "2nd box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv3 : {
								ref : "qDef.mmShowDim4CustColv3",
								label: "3rd box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv4 : {
								ref : "qDef.mmShowDim4CustColv4",
								label: "4th box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv5 : {
								ref : "qDef.mmShowDim4CustColv5",
								label: "5th box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv6 : {
								ref : "qDef.mmShowDim4CustColv6",
								label: "6th box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv7 : {
								ref : "qDef.mmShowDim4CustColv7",
								label: "7th box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv8 : {
								ref : "qDef.mmShowDim4CustColv8",
								label: "8th box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv9 : {
								ref : "qDef.mmShowDim4CustColv9",
								label: "9th box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowDim4CustColv10 : {
								ref : "qDef.mmShowDim4CustColv10",
								label: "10th box background",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "D" & layout.qDef.mmShowDim4CustomCol){ return true } else { return false }} 
								},
							mmShowMeasCustColOn : {
								ref : "qDef.mmShowMeasCustomCol",
								label : "Specify colors for the sequential ranges in the measure (HEX)",
								type : "boolean",
								defaultValue : false,
								show: function(layout) { if(layout.qDef.mmColourUse == "M"){ return true } else { return false }} 
								},
							mmShowMeasCustColTxt : {
								ref : "qDef.mmShowMeasCustColTxt",
								label: "Text colour for tower titles (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & layout.qDef.mmShowMeasCustomCol){ return true } else { return false }} 
								},
							mmShowMeasCustColv1 : {
								ref : "qDef.mmShowMeasCustColv1",
								label: "Color for minimum value",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & layout.qDef.mmShowMeasCustomCol){ return true } else { return false }} 
								},
							mmShowMeasCustColv2 : {
								ref : "qDef.mmShowMeasCustColv2",
								label: "Color for 1st range",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & layout.qDef.mmShowMeasCustomCol){ return true } else { return false }} 
								},
							mmShowMeasCustColv3 : {
								ref : "qDef.mmShowMeasCustColv3",
								label: "Color for 2nd range",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & layout.qDef.mmShowMeasCustomCol){ return true } else { return false }} 
								},
							mmShowMeasCustColv4 : {
								ref : "qDef.mmShowMeasCustColv4",
								label: "Color for 3rd range",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & layout.qDef.mmShowMeasCustomCol){ return true } else { return false }} 
								},
							mmShowMeasCustColv5 : {
								ref : "qDef.mmShowMeasCustColv5",
								label: "Color for 4th range",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & layout.qDef.mmShowMeasCustomCol){ return true } else { return false }} 
								},
							mmShowMeasCustColv6 : {
								ref : "qDef.mmShowMeasCustColv6",
								label: "Color for 5th range",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & layout.qDef.mmShowMeasCustomCol){ return true } else { return false }} 
								},
							mmShowMeasCustColv7 : {
								ref : "qDef.mmShowMeasCustColv7",
								label: "Color for maximum value",
								type: "string",
								expression: "optional",
								defaultValue: "",
								show: function(layout) { if(layout.qDef.mmColourUse == "M" & layout.qDef.mmShowMeasCustomCol){ return true } else { return false }} 
								}
							}
						},
					ModelColours: {
						type:"items",
						label:"Custom colors",
						items: {
							mmCustomStyles : {
								ref : "qDef.mmCustomCols",
								label : "Use custom colours",
								type : "boolean",
								defaultValue : false
								},
							mmStyleSpaceBGCol : {
								ref : "qDef.mmStyleSpaceBG",
								label: "Background Color for Spaces (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "FFFFFF",
								show: function(layout) { return layout.qDef.mmCustomCols } 
								},
							mmStyleTowerBGCol : {
								ref : "qDef.mmStyleTowerBG",
								label: "Background Color for Towers (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "FFFFF0",
								show: function(layout) { return layout.qDef.mmCustomCols } 
								},
							mmStyleSummaryBGCol : {
								ref : "qDef.mmStyleSummaryBG",
								label: "Background Color for Boxes (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "FFFFFF",
								show: function(layout) { return layout.qDef.mmCustomCols } 
								},
							mmStyleSpaceTitleTxtCol : {
								ref : "qDef.mmStyleSpaceTitleTxtCol",
								label: "Color for Space titles (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "CCCCCC",
								show: function(layout) { return layout.qDef.mmCustomCols } 
								},
							mmStyleTowerTitleTxtCol : {
								ref : "qDef.mmStyleTowerTitleTxtCol",
								label: "Color for Tower titles (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "888888",
								show: function(layout) { return layout.qDef.mmCustomCols } 
								},	
							mmStyleSummaryTxtCol : {
								ref : "qDef.mmStyleSummaryTxtCol",
								label: "Color for Boxes (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "666666",
								show: function(layout) { return layout.qDef.mmCustomCols } 
								},
							mCustomBorders : {
								ref : "qDef.mCustomBorders",
								label : "Use custom borders",
								type : "boolean",
								defaultValue : false
								},	
							mmStyleSpaceDividerSize : {
								ref : "qDef.mmStyleSpaceDividerSize",
								type: "number",
								component: "slider",
								label: "Space Divider",
								min: 0,
								max: 30,
								step: 1,
								defaultValue: 10,
								show: function(layout) { return layout.qDef.mCustomBorders } 
								},
							mmStyleSpaceDividerCol : {
								ref: "qDef.mmStyleSpaceDividerCol",
								label: "Space Divider colour (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "CCCCCC",
								show: function(layout) { return layout.qDef.mCustomBorders }  
								},	
							mmStyleTowerBorderSize : {
								ref : "qDef.mmStyleTowerBorderSize",
								type: "number",
								component: "slider",
								label: "Tower borders",
								min: 0,
								max: 30,
								step: 1,
								defaultValue: 1,
								show: function(layout) { return layout.qDef.mCustomBorders } 
								},
							mmStyleTowerBorderCol : {
								ref: "qDef.mmStyleTowerBorderCol",
								label: "Tower border colour (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "CCCCCC",
								show: function(layout) { return layout.qDef.mCustomBorders }  
								},	
							mmStyleSummaryBorderSize : {
								ref : "qDef.mmStyleSummaryBorderSize",
								type: "number",
								component: "slider",
								label: "Box borders",
								min: 0,
								max: 30,
								step: 1,
								defaultValue: 1,
								show: function(layout) { return layout.qDef.mCustomBorders } 
								},
							mmStyleSummaryBorderCol : {
								ref: "qDef.mmStyleSummaryBorderCol",
								label: "Box border colour (HEX)",
								type: "string",
								expression: "optional",
								defaultValue: "CCCCCC",
								show: function(layout) { return layout.qDef.mCustomBorders }  
								}	
							}
						},	
					ModelStyle: {
						type:"items",
						label:"Typography",
						items: {
							mCustomFont : {
								ref : "qDef.mCustomFont",
								label : "Use custom a font",
								type : "boolean",
								defaultValue : false
								},	
							mCustomFontLoc : {
								ref: "qDef.mCustomFontLoc",
								type: "string",
								component: "buttongroup",
								label: "Use a system or Google web font",
								options: [{
									value: "G",
									label: "Google",
									tooltip: "Font must be on Google fonts"
								}, {
									value: "S",
									label: "System",
									tooltip: "Font must be on machine"
								}],
								defaultValue: "S",
								show: function(layout) { return layout.qDef.mCustomFont } 
								},
							mCustomFontNameGoogle : {
								ref : "qDef.mCustomFontNameGoogle",
								label: "Font name (must be available on https://www.google.com/fonts)",
								type: "string",
								expression: "optional",
								defaultValue: "Droid Sans",
								show: function(layout) { if(layout.qDef.mCustomFont & layout.qDef.mCustomFontLoc == "G"){ return true } else { return false }} 
								},
							mCustomFontNameSystem : {
								ref : "qDef.mCustomFontNameSystem",
								label: "Font name",
								type: "string",
								expression: "optional",
								defaultValue: "Cambria",
								show: function(layout) { if(layout.qDef.mCustomFont & layout.qDef.mCustomFontLoc == "S"){ return true } else { return false }} 
								},
							mCustomTxt : {
								ref : "qDef.mCustomTxt",
								label : "Use custom text settings",
								type : "boolean",
								defaultValue : false
								},	
							mmStyleSpaceTitleTxtSize : {
								ref : "qDef.mmStyleSpaceTitleTxtSize",
								label: "Space title text size(px)",
								type: "number",
								expression: "optional",
								defaultValue: 48,
								show: function(layout) { return layout.qDef.mCustomTxt } 
								},
							mmStyleSpaceTitleTxtAlign : {
								ref : "qDef.mmStyleSpaceTitleTxtAlign",
								label: "Space title alignment",
								type: "string",
								component: "buttongroup",
								options: [{
									value: "Left",
									label: "Left"
								}, {
									value: "Center",
									label: "Center"
								}, {
									value: "Right",
									label: "Right"
								}],
								defaultValue: "Left",
								show: function(layout) { return layout.qDef.mCustomTxt } 
								},
							mmStyleTowerTitleTxtSize : {
								ref : "qDef.mmStyleTowerTitleTxtSize",
								label: "Tower title text size (px)",
								type: "number",
								expression: "optional",
								defaultValue: 24,
								show: function(layout) { return layout.qDef.mCustomTxt } 
								},	
							mmStyleTowerTitleTxtAlign : {
								ref : "qDef.mmStyleTowerTitleTxtAlign",
								label: "Tower title alignment",
								type: "string",
								component: "buttongroup",
								options: [{
									value: "Left",
									label: "Left"
								}, {
									value: "Center",
									label: "Center"
								}, {
									value: "Right",
									label: "Right"
								}],
								defaultValue: "Left",
								show: function(layout) { return layout.qDef.mCustomTxt } 
								},
							mmStyleSummaryTxtSize : {
								ref : "qDef.mmStyleSummaryTxtSize",
								label: "Box text size (px)",
								type: "number",
								expression: "optional",
								defaultValue: 14,
								show: function(layout) { return layout.qDef.mCustomTxt } 
								},
							mmStyleSummaryTxtAlign : {
								ref : "qDef.mmStyleSummaryTxtAlign",
								label: "Box text alignment",
								type: "string",
								component: "buttongroup",
								options: [{
									value: "Left",
									label: "Left"
								}, {
									value: "Center",
									label: "Center"
								}, {
									value: "Right",
									label: "Right"
								}],
								defaultValue: "Left",
								show: function(layout) { return layout.qDef.mCustomTxt } 
								},	
							mmStyleTxtLineHeight : {
								ref : "qDef.mmStyleTxtLineHeight",
								label: "Line height",
								type: "number",
								component: "buttongroup",
								options: [{
									value: 95,
									label: "Tight",
									tooltip: "Tight"
								}, {
									value: 120,
									label: "Normal",
									tooltip: "Normal"
								}, {
									value: 160,
									label: "Loose",
									tooltip: "Loose"
								}],
								defaultValue: 120,
								show: function(layout) { return layout.qDef.mCustomTxt } 
								}	
							}
						}
					}

				},
				settings: {
					uses: "settings"				
				}
				
			}		
		},
		snapshot: {
			canTakeSnapshot: true
		},
		support : {
			exportData: true
		},
		



		paint: function ( $element,layout ) {

			//set up useful variables DATA
			var html = "", 
				self = this, 
				lastrow = 0, 
				morebutton = false, 
				rowcount = this.backendApi.getRowCount(), 
				mymeasureCount = layout.qHyperCube.qMeasureInfo.length, 
				myDimCount = layout.qHyperCube.qDimensionInfo.length, 
				mmUseMeasure = layout.qDef.mmShowMeasure, 
				mmUseDim4 = layout.qDef.mmShowDim4;
			
			var qdata = layout.qHyperCube.qDataPages[0];

			var mmuniqueID = layout.qInfo.qId;
			
			var dimensionItemCounts = layout.qHyperCube.qDimensionInfo.map(function(d) {
				return d.qCardinal;
			});
			var dimensionTitles = layout.qHyperCube.qDimensionInfo.map(function(d) {
				return d.qFallbackTitle;
			});
			
			var measureTitle = layout.qHyperCube.qMeasureInfo.map(function(d) {
				return d.qFallbackTitle;
			});
			var measureMax = layout.qHyperCube.qMeasureInfo.map(function(d) {
				return d.qMax;
			});
			var measureMin = layout.qHyperCube.qMeasureInfo.map(function(d) {
				return d.qMin;
			});
			//edit mode catcher
			// OLD SCOPE var parentscope = angular.element($element).scope().$parent.$parent;
			//$element.html(parentscope.editmode ? 'In Edit Mode' : 'Not in Edit mode');
			var parentscope = angular.element($element).scope().$parent.$parent.$parent;
			$element.html(parentscope.editmode ? 'In Edit Mode' : 'Not in Edit mode');
			
			
			// create functions
			function mmgetRandomColor() {
			    var mmletters = '0123456789ABCDEF'.split('');
			    var mmcolor ="";
			    for (var i = 0; i < 6; i++ ) {
			        mmcolor += mmletters[Math.floor(Math.random() * 16)];
			    }
			    //console.log(mmcolor);
			    return mmcolor;

			};


			//reset any scroll on the QV object container position
			$element.parent().parent().scrollLeft(0);
			$element.parent().parent().scrollTop(0);

			//CREATE ADDITIONAL CONTENT FOR INCLUSION LATER
			
			//Dimension and Measure vars to colour by
			var mmColourUse = layout.qDef.mmColourUse;
			var mmShowDim4CustomCol = layout.qDef.mmShowDim4CustomCol, Dim4ColorArray12, Dim4ColorArray6, Dim4ColorArray2, Dim4CustomColorArray;
			var Dim4isOn;
			var Dim4LegendOn = layout.qDef.mmShowDim4LegendOn;
			var Dim4LegendInsert;
			var MeasColorArrayTarg, MeasColorArraySeq, MeasColorArraySeq1, MeasColorArraySeq2, MeasColorArraySeq3, MeasColorArraySeq4, MeasColorArraySeq5, MeasColorArraySeq6, MeasColorArraySeq7;
			var MeasLegendInsert;
			var customRangeOn;
			var MeasColorSteps = 7;
			var mmTowerTotals = layout.qDef.mmTowerTotals;

			
			if(!layout.qDef.mmCustomRangeOn){
				customRangeOn = true;
				
			} else {
				customRangeOn = false;
			
			};

			//check and set up 4th dim and colour palette
			if((myDimCount==4)){
				Dim4isOn = true;
				var Dim4Distincts=dimensionItemCounts[3];
				var Dim4Title=dimensionTitles[3];
				
				//set up color arrays
				Dim4ColorArray12 =[
				"332288",
				"6699CC",
				"88CCEE",
				"44AA99",
				"117733",
				"999933",
				"DDCC77",
				"661100",
				"CC6677",
				"AA4466",
				"882255",
				"AA4499"
				];
				Dim4ColorArray6 =[
				"332288",
				"88CCEE",
				"117733",
				"DDCC77",
				"CC6677",
				"AA4499"
				];
				Dim4ColorArray2 =[
				"4477AA",
				"CC6677"
				];
				if(mmShowDim4CustomCol){
					Dim4CustomColorArray = [
						layout.qDef.mmShowDim4CustColv1,
						layout.qDef.mmShowDim4CustColv2,
						layout.qDef.mmShowDim4CustColv3,
						layout.qDef.mmShowDim4CustColv4,
						layout.qDef.mmShowDim4CustColv5,
						layout.qDef.mmShowDim4CustColv6,
						layout.qDef.mmShowDim4CustColv7,
						layout.qDef.mmShowDim4CustColv8,
						layout.qDef.mmShowDim4CustColv9,
						layout.qDef.mmShowDim4CustColv10
					];
				} else {
					Dim4CustomColorArray = [
						"064A3A",
						"D82A96",
						"E68F63",
						"578D14",
						"CDA8FF",
						"9B1F49",
						"954ABB",
						"834E06",
						"AB6F6A",
						"FD92EA"
					];
				};	
				//if the Dim have too many values for standard palette (>12) - create random palette
				var Dim4CustomRandoColorArray = [];
				var ColCount = 0;
				for (var i=0; i < Dim4Distincts; i++)
				        Dim4CustomRandoColorArray.push(mmgetRandomColor());
				
			} else {
				Dim4isOn = false;
			};

			//Check and set up measure colour palette
			if((mymeasureCount==1) & (mmColourUse == "M")){
				//set up color array
				var MeasColValTxt = "";
				var MeasColValTxtL="";
				var MeasColValTxtD="";
				if(layout.qDef.mmShowMeasCustomCol){
					MeasColorArraySeq =[
					layout.qDef.mmShowMeasCustColv1,
					layout.qDef.mmShowMeasCustColv2,
					layout.qDef.mmShowMeasCustColv3,
					layout.qDef.mmShowMeasCustColv4,
					layout.qDef.mmShowMeasCustColv5,
					layout.qDef.mmShowMeasCustColv6,
					layout.qDef.mmShowMeasCustColv7
					];
					MeasColValTxtL=layout.qDef.mmShowMeasCustColTxt;
					MeasColValTxtD=layout.qDef.mmShowMeasCustColTxt;
				} else {
					MeasColorArraySeq =[
					"FFFBD5",
					"FEE391",
					"FEC44F",
					"FB9A29",
					"EC7014",
					"CC4C02",
					"8C2D04"
					];
					MeasColorArraySeq1 =[
					"FFF7BC"
					];
					MeasColorArraySeq2 =[
					"FFF7BC",
					"D95F0E"
					];
					MeasColorArraySeq3 =[
					"FFF7BC",
					"FEC44F",
					"D95F0E"
					];
					MeasColorArraySeq4 =[
					"FFFBD5",
					"FED98E",
					"FB9A29",
					"CC4C02"
					];
					MeasColorArraySeq5 =[
					"FFFBD5",
					"FED98E",
					"FB9A29",
					"D95F0E",
					"993404"
					];
					MeasColorArraySeq6 =[
					"FFFBD5",
					"FEE391",
					"FEC44F",
					"FB9A29",
					"D95F0E",
					"993404"
					];
					MeasColorArraySeq7 =[
					"FFFBD5",
					"FEE391",
					"FEC44F",
					"FB9A29",
					"EC7014",
					"CC4C02",
					"8C2D04"
					];
					MeasColValTxtL="FFFFFF";
					MeasColValTxtD="111111";
				}

				//Create the ranges for the the measure
				if(customRangeOn){
					var mRange = Math.round((parseFloat(layout.qDef.mmCustomRangeMax) - parseFloat(layout.qDef.mmCustomRangeMin)) * 100 ) / 100;
					var mPart = Math.round((parseFloat(mRange/5)) * 100 ) / 100;
					measureMin = parseFloat(layout.qDef.mmCustomRangeMin);
					measureMax = parseFloat(layout.qDef.mmCustomRangeMax);
					
				} else {
					var mRange = Math.round((parseFloat(measureMax) - parseFloat(measureMin)) * 100 ) / 100;
					var mPart = Math.round((parseFloat(mRange/5)) * 100 ) / 100;
				};
				var mSequenceArr = [
					Math.round((parseFloat(measureMin)) * 100 ) / 100,
					Math.round((parseFloat(measureMin) + (mPart)) * 100 ) / 100,
					Math.round((parseFloat(measureMin) + (mPart*2)) * 100 ) / 100,
					Math.round((parseFloat(measureMin) + (mPart*3)) * 100 ) / 100,
					Math.round((parseFloat(measureMin) + (mPart*4)) * 100 ) / 100,
					Math.round((parseFloat(measureMax)) * 100 ) / 100
				];


			};
			
			
			//Set up styles VARs
			var mmstSpaceBGCol, mmstTowerBGCol, mmstSummaryBGCol, mmstSpaceTitleCol, mmstTowerTitleCol, mmstSummaryTxtCol;
			var mmstSpaceTitleSize, mmstTowerTitleSize, mmstSummaryTxtSize, mmstSpaceTitleAlign, mmstTowerTitleAlign, mmstSummaryTxtAlign, mmstTxtLineHeight;
			var mmstSpaceDividerSize, mmstSpaceDividerCol, mmstTowerBorderSize, mmstTowerBorderCol, mmstSummaryBorderSize, mmstSummaryBorderCol;
			
			//set a default tower width
			var mmTowerWidth;
			if(layout.qDef.customTowerWidth){
				mmTowerWidth = layout.qDef.mmStyleTowerWidth;
			} else {
				mmTowerWidth = 250;
			};
			var mmWidth;
			if(layout.qDef.customWidthOn){
				mmWidth = layout.qDef.mmStyleWidth;
			} else {
				mmWidth = ((dimensionItemCounts[1] * mmTowerWidth)+(dimensionItemCounts[1]*50));
			};

			//Colour options
			if(layout.qDef.mmCustomCols){
				mmstSpaceBGCol = layout.qDef.mmStyleSpaceBG;
				mmstTowerBGCol = layout.qDef.mmStyleTowerBG;
				mmstSummaryBGCol = layout.qDef.mmStyleSummaryBG;
				mmstSpaceTitleCol = layout.qDef.mmStyleSpaceTitleTxtCol;
				mmstTowerTitleCol = layout.qDef.mmStyleTowerTitleTxtCol;
				mmstSummaryTxtCol = layout.qDef.mmStyleSummaryTxtCol;
			} else {
				mmstSpaceBGCol = 'FFFFFF';
				mmstTowerBGCol = 'FFFFF0';
				mmstSummaryBGCol = 'FFFFFF';
				mmstSpaceTitleCol = 'CCCCCC';
				mmstTowerTitleCol = '888888';
				mmstSummaryTxtCol = '666666';
			};
			//Text sizes
			if(layout.qDef.mCustomTxt){
				mmstSpaceTitleSize = layout.qDef.mmStyleSpaceTitleTxtSize;
				mmstTowerTitleSize = layout.qDef.mmStyleTowerTitleTxtSize;
				mmstSummaryTxtSize = layout.qDef.mmStyleSummaryTxtSize;
				mmstSpaceTitleAlign = 'text-align: '+layout.qDef.mmStyleSpaceTitleTxtAlign+'; ';
				mmstTowerTitleAlign = 'text-align: '+layout.qDef.mmStyleTowerTitleTxtAlign+'; ';
				mmstSummaryTxtAlign = 'text-align: '+layout.qDef.mmStyleSummaryTxtAlign+'; ';
				mmstTxtLineHeight = 'line-height: '+layout.qDef.mmStyleTxtLineHeight+'%; ';
			} else {
				mmstSpaceTitleSize = 48;
				mmstTowerTitleSize = 24;
				mmstSummaryTxtSize = 14;
				mmstSpaceTitleAlign = '';
				mmstTowerTitleAlign = '';
				mmstSummaryTxtAlign = '';
				mmstTxtLineHeight = '';
			};
			//Dividers
			if(layout.qDef.mCustomBorders){
				mmstSpaceDividerSize = layout.qDef.mmStyleSpaceDividerSize;
				mmstSpaceDividerCol = layout.qDef.mmStyleSpaceDividerCol;
				mmstTowerBorderSize = layout.qDef.mmStyleTowerBorderSize;
				mmstTowerBorderCol = layout.qDef.mmStyleTowerBorderCol;
				mmstSummaryBorderSize = layout.qDef.mmStyleSummaryBorderSize;
				mmstSummaryBorderCol = layout.qDef.mmStyleSummaryBorderCol;
			} else {
				mmstSpaceDividerSize = 10;
				mmstSpaceDividerCol = 'CCCCCC';
				mmstTowerBorderSize = 1;
				mmstTowerBorderCol = 'CCCCCC';
				mmstSummaryBorderSize = 0;
				mmstSummaryBorderCol = 'CCCCCC';
			};

			

			//create style strings to insert
			var mmstSpaceh, mmstSpacev, mmstSpaceTitle, mmstTowerh, mmstTowerv, mmstTowerTitle, mmstSummary;
			mmstSpaceh = 'style="background-color:#'+mmstSpaceBGCol+'; border-left:'+ mmstSpaceDividerSize + 'px solid #'+ mmstSpaceDividerCol+';" ';
			mmstSpacev = 'style="background-color:#'+mmstSpaceBGCol+'; border-bottom:'+ mmstSpaceDividerSize + 'px solid #'+ mmstSpaceDividerCol+';" ';
			mmstSpaceTitle = 'style="color:#' +mmstSpaceTitleCol+ '; font-size: ' + mmstSpaceTitleSize + 'px; '+mmstTxtLineHeight+mmstSpaceTitleAlign+' max-width:' +(3*mmTowerWidth)+'px;" ';
			mmstTowerh = 'style="background-color:#'+mmstTowerBGCol+'; border:'+ mmstTowerBorderSize + 'px solid #'+ mmstTowerBorderCol+'; width:'+mmTowerWidth+'px;" ';
			mmstTowerv = 'style="background-color:#'+mmstTowerBGCol+'; border:'+ mmstTowerBorderSize + 'px solid #'+ mmstTowerBorderCol+'; width:100%;" ';
			mmstTowerTitle = 'style="color:#' +mmstTowerTitleCol+ '; font-size: ' + mmstTowerTitleSize + 'px; '+mmstTxtLineHeight+mmstTowerTitleAlign+' " ';
			mmstSummary = 'style="background-color:#'+mmstSummaryBGCol+'; color:#' +mmstSummaryTxtCol+ '; font-size: ' + mmstSummaryTxtSize + 'px; '+mmstTxtLineHeight+mmstSummaryTxtAlign+' border:'+ mmstSummaryBorderSize + 'px solid #'+ mmstSummaryBorderCol+';" ';

			
			//Controls
			html+= '<div class="mmControlButs">';
			html+= '<button class="mmControlsUI lui-button mmIconButAdjust" alt="Show controls" type="button"><span class="mmQlikIcons">†</span></button> ';
			html+= '<button class="butHideTows lui-button " type="button"><span class="mmHideShowButPlusT mmQlikIcons">Q</span> <span class="mmHideShowButPlusTxt">Towers</span></button> ';
			html+= '<button class="butHideSums lui-button " type="button"><span class="mmHideShowButPlusB mmQlikIcons">Q</span> <span class="mmHideShowButPlusTxt">Boxes</span></button> ';
			html+= '<button class="butZoomout lui-button mmIconButAdjust" alt="Zoom Out" type="button"><span class="mmQlikIcons">Z</span></button> ';
			html+= '<button class="butZoomin lui-button mmIconButAdjust" alt="Zoom In" type="button"><span class="mmQlikIcons">Y</span></button> ';
			html+= '<button class="butFitHeight lui-button mmIconButAdjust" alt="Fit Height" type="button"><span class="mmQlikIcons">ƒ</span></button> ';
			html+= '<button class="butFitWidth lui-button mmIconButAdjust" alt="Fit Width" type="button"><span class="mmQlikIcons">√</span></button> ';
			html+= '<button class="butReposition lui-button " type="button">Reset</button>';	
			html+= '<button class="butPrint lui-button mmIconButAdjust" alt="Fit Height" type="button"><span class="mmQlikIcons">r</span></button>';		
			html+= '</div>';
			
		
			//Set up options for the model container
			//Set orientation and scale options
			var mmOrient='a';
			var mmOrientV= '';
			if(layout.qDef.custOrientationValV & layout.qDef.custOrientationOn){
				mmOrientV = 'icicles';
			};

			var mmDefScale="1.0";
			var mmDefScaleInsert= "";
			if(layout.qDef.mmForceScaleOn){
				mmDefScale = layout.qDef.mmForceScaleVal;
				mmDefScaleInsert = 'transform: scale('+mmDefScale+'); transform-origin: top left;';
				if(layout.qDef.customWidthOn){
					mmDefScaleInsert += ' margin-top: 40px;';
				};
			} else {
				mmDefScale="1.0";
				mmDefScaleInsert = 'transform: scale('+mmDefScale+'); transform-origin: top left;';
			};
			

			//check and set for custom font

			var mmCustomFontType;
			var mmCustomFontName;
			var mmCustFontInsert = '';

			

			if(layout.qDef.mCustomFont){
				if(layout.qDef.mCustomFontLoc == "S"){
					mmCustomFontName = layout.qDef.mCustomFontNameSystem;
					mmCustFontInsert ='font-family: '+mmCustomFontName+' , &apos;QlikView Sans&apos;, sans-serif;';
				} else if (layout.qDef.mCustomFontLoc == "G"){
					mmCustomFontName = layout.qDef.mCustomFontNameGoogle;
					
					WebFont.load({
					    google: {
					      families: [mmCustomFontName]
					    }
					});

					mmCustFontInsert ='font-family: '+mmCustomFontName+' , &apos;QlikView Sans&apos;, sans-serif;';
				} else {

					mmCustFontInsert ='';
				};
				

			} else {
				mmCustFontInsert = '';
			};

		
			//Create the model container and set orientation etc

			if(layout.qDef.custOrientationOn){
				if(layout.qDef.custOrientationVal){
					mmOrient = 'v'; 
					html += '<div class="modelcontainerv" style="'+mmDefScaleInsert+mmCustFontInsert+'" id="'+'mmI'+mmuniqueID+'">';
				} else {
					mmOrient = 'h'; 
					html += '<div class="modelcontainerh" style="width:'+ mmWidth +'px; '+mmDefScaleInsert+mmCustFontInsert+'" id="'+'mmI'+mmuniqueID+'">';					
				};
			} else {
				//check panel orientation and render based on port/land
				var AspectH = $element.parent().parent().innerHeight();
				var AspectW = $element.parent().parent().innerWidth();
				if(AspectH <= AspectW){
					mmOrient = 'h';
					html += '<div class="modelcontainerh" style="width:'+ mmWidth +'px; '+mmDefScaleInsert+mmCustFontInsert+'" id="'+'mmI'+mmuniqueID+'">';
				} else {
					mmOrient = 'v';
					html += '<div class="modelcontainerv" style="'+mmDefScaleInsert+mmCustFontInsert+'" id="'+'mmI'+mmuniqueID+'">';
				};
				
			};
			
			//SET UP SELECTABLES
			var spacesSelectable = '';
			var towersSelectable = '';
			var boxesSelectable = '';
			var spacesTSelectable = '';
			var towersTSelectable = '';
			var boxesTSelectable = '';
			var areasSelectable = 0;
			if(layout.qDef.selectionSpaces){
				spacesSelectable = 'selectable';
				spacesTSelectable = 'selectable';
				areasSelectable += 1;
			};
			if(layout.qDef.selectionTowers){
				towersSelectable = 'selectable';
				towersTSelectable = 'selectable';
				areasSelectable += 1;
			};
			if(layout.qDef.selectionBoxes){
				boxesSelectable = 'selectable';
				boxesTSelectable = 'selectable';
				areasSelectable += 1;
			};

			if(areasSelectable > 1) {
				spacesSelectable = '';
				towersSelectable = '';
				//boxesSelectable = '';
			} else {
				spacesTSelectable = '';
				towersTSelectable = '';
				//boxesTSelectable = '';
			};
		
			//render data - build out the spaces, towers and boxes
				var preElement1, curElement1, preElement2, curElement2, ele1Open=0, ele2Open=0, Dim4EleArr=[], dim1Total= 0, dim2Total= 0, TowerTotArr=[], TowerTotValsArr=[], TowerNum=0, TowerBoxCount=0;
				$.each(qdata.qMatrix, function( key, row ) {
					var Dim1=row[0].qText,
					Dim2=row[1].qText,
					Dim3=row[2].qText,
					Element1 = row[0].qElemNumber,
					Element2 = row[1].qElemNumber,
					Element3 = row[2].qElemNumber;

					lastrow = key;
					curElement1 = Element1;
					curElement2 = Element2;

					

					//set up how 4th Dim will be used
					var Dim4ToInsert="";
					if(Dim4isOn){
						var Dim4=row[3].qText;
						var Element4 = row[3].qElemNumber;
						var Dim4Palette;
						var Dim4EntCol;
						var Dim4EntTxtCol;
						//choose and set up palette if colour by
						if(mmColourUse == "D"){
							if(layout.qDef.mmShowDim4CustomCol){
								Dim4Palette = Dim4CustomColorArray;
								Dim4EntTxtCol=layout.qDef.mmShowDim4CustColTxt;
								if(Element4 > 9){
									Dim4EntCol= "000000";
								} else {
									Dim4EntCol = Dim4Palette[Element4];
								};
							} else {
								if (Dim4Distincts < 3 ){
									Dim4Palette = Dim4ColorArray2;
									Dim4EntCol = Dim4Palette[Element4];
								} else if (Dim4Distincts > 2 & Dim4Distincts < 7 ){
									Dim4Palette = Dim4ColorArray6;
									Dim4EntCol = Dim4Palette[Element4];
								} else if (Dim4Distincts > 6 & Dim4Distincts < 13 ) {
									Dim4Palette = Dim4ColorArray12;
									Dim4EntCol = Dim4Palette[Element4];
								} else {
									Dim4Palette = Dim4CustomRandoColorArray;
									Dim4EntCol = Dim4Palette[Element4];
								};
								Dim4EntTxtCol="FFFFFF";
							}
							Dim4EleArr.push(Dim4EntCol + ':' +row[3].qText+':' +Element4);
							mmstSummary = 'style="background-color:#'+Dim4EntCol+'; color:#'+Dim4EntTxtCol+'; font-size: ' + mmstSummaryTxtSize + 'px; '+mmstTxtLineHeight+mmstSummaryTxtAlign+' border:'+ mmstSummaryBorderSize + 'px solid #'+ mmstSummaryBorderCol+';" ';
						};
						if(mmUseDim4){
							if(layout.qDef.mmShowDim4LinkTog){
								Dim4ToInsert = ' <span class="mmDim4ValNum">'+Dim4Title+': <a href="'+Dim4+'" target="_blank">'+Dim4+'</a></span>';
							} else {
								Dim4ToInsert = ' <span class="mmDim4ValNum">'+Dim4Title+': '+Dim4+'</span>';
							};
							
						};	
						
					};

					
					//set up how measure will be used
					
					var measValueToInsert="";
					if((mymeasureCount==1)){
						var Meas;
						if(row[myDimCount].qNum == "NaN"){
							if(mmColourUse == "M"){
								Meas = Math.round((parseFloat(row[myDimCount].qText)) * 100 ) / 100;
							} else {
								Meas = row[myDimCount].qText;
							}
						} else {
							Meas = row[myDimCount].qNum;
						};
						var MeasColVal = "";
						
						if(mmColourUse == "M"){
						
							if(Meas < mSequenceArr[0]){
								MeasColVal  = MeasColorArraySeq[0];
								MeasColValTxt = MeasColValTxtD;
							} else if((Meas >= mSequenceArr[0]) & (Meas < mSequenceArr[1])){
								MeasColVal  = MeasColorArraySeq[1];
								MeasColValTxt = MeasColValTxtD;
							} else if((Meas >= mSequenceArr[1]) & (Meas < mSequenceArr[2])){
								MeasColVal  = MeasColorArraySeq[2];
								MeasColValTxt = MeasColValTxtD;
							} else if((Meas >= mSequenceArr[2]) & (Meas < mSequenceArr[3])){
								MeasColVal  = MeasColorArraySeq[3];
								MeasColValTxt = MeasColValTxtD;
							} else if((Meas >= mSequenceArr[3]) & (Meas < mSequenceArr[4])){
								MeasColVal  = MeasColorArraySeq[4];
								MeasColValTxt = MeasColValTxtL;
							} else if((Meas >= mSequenceArr[4]) & (Meas < mSequenceArr[5])){
								MeasColVal  = MeasColorArraySeq[5];
								MeasColValTxt = MeasColValTxtL;
							} else if(Meas >= mSequenceArr[5]){
								MeasColVal  = MeasColorArraySeq[6];
								MeasColValTxt = MeasColValTxtL;
							};
							if(layout.qDef.mmColourTarg == "B"){
								mmstSummary = 'style="background-color:#'+MeasColVal+'; color:#'+MeasColValTxt+'; font-size: ' + mmstSummaryTxtSize + 'px; '+mmstTxtLineHeight+mmstSummaryTxtAlign+' border:'+ mmstSummaryBorderSize + 'px solid #'+ mmstSummaryBorderCol+';" ';
							}
						};
						if (mmUseMeasure){
							measValueToInsert = ' <span class="mmMeasureValNum">'+measureTitle+': '+Meas+'</span>';
						};
						
					};

					//Draw the pieces

					if(curElement1 != preElement1){
						//Check if unique Dim1 and insert Dim1 
						if(ele1Open){
							html += '</div>';
							ele1Open=0;
							//TowerNum =0;
						};
						if(ele2Open){
								html += '</div>';
								if(mmTowerTotals != "A"){
									TowerTotArr.push( preElement2+ ':' + TowerNum + ':' + TowerBoxCount);
									TowerTotValsArr.push(TowerNum);
								} else {
									var towerAvg = Math.round(parseFloat(TowerNum/TowerBoxCount) * 100 ) / 100;
									//console.log('avg: '+towerAvg);
									TowerTotArr.push( preElement2+ ':' + towerAvg + ':' + TowerBoxCount);
									TowerTotValsArr.push(towerAvg);
								};
								
								TowerBoxCount = 0;
								ele2Open=0;
								TowerNum =0;
							};
						if(mmOrient=="h"){
								html += '<div class="mmspace'+ mmOrient +' '+spacesSelectable+'" ' +mmstSpaceh+'data-value="'+ row[0].qElemNumber + '/0"><div class="mmspacetitle'+ mmOrient +' '+spacesTSelectable+'" '+mmstSpaceTitle+' data-value="'+ row[0].qElemNumber + '/0">'+ Dim1 + '</div>';
							} else {
								html += '<div class="mmspace'+ mmOrient +' '+spacesSelectable+'" ' +mmstSpacev+'data-value="'+ row[0].qElemNumber + '/0"><div class="mmspacetitle'+ mmOrient +' '+spacesTSelectable+'" '+mmstSpaceTitle+' data-value="'+ row[0].qElemNumber + '/0">'+ Dim1 + '</div>';
							};
						//html += '<div class="mmspace'+ mmOrient +'" '+mmstSpace+'><div class="mmspacetitle'+ mmOrient +'" '+mmstSpaceTitle+'>'+ Dim1 + '</div>';	
						if(curElement2 != preElement2){	
							//Check if unique Dim2 and insert Dim2 and Dim3
							if(ele2Open){
								html += '</div>';
								if(mmTowerTotals != "A"){
									TowerTotArr.push( preElement2+ ':' + TowerNum + ':' + TowerBoxCount);
									TowerTotValsArr.push(TowerNum);
								} else {
									var towerAvg = Math.round(parseFloat(TowerNum/TowerBoxCount) * 100 ) / 100;
									//console.log('avg: '+towerAvg);
									TowerTotArr.push( preElement2+ ':' + towerAvg + ':' + TowerBoxCount);
									TowerTotValsArr.push(towerAvg);
								};
								TowerBoxCount = 0;
								ele2Open=0;
								TowerNum =0;
							};

							if(mmOrient=="h"){
								html += '<div class="mmtower'+ mmOrient + ' '+mmOrientV+' '+towersSelectable+'" ' + mmstTowerh +'data-value="'+ row[1].qElemNumber + '/1">';
							} else {
								html += '<div class="mmtower'+ mmOrient +' '+towersSelectable+'" ' + mmstTowerv +'data-value="'+ row[1].qElemNumber + '/1">';
							};
							html += '<div class="mmtowertitle'+ mmOrient +' '+towersTSelectable+'" ' +mmstTowerTitle+' data-value="'+ row[1].qElemNumber + '/1">'+ Dim2 + '</div>';
							html += '<div class="mmsummary'+ mmOrient +' '+boxesSelectable+'" ' +mmstSummary+'data-value="'+ row[2].qElemNumber + '/2"><span class="mmsummarytxt">'+ Dim3 + '</span><span class="mmAdditionalData">'+measValueToInsert+Dim4ToInsert+'</span></div>';	
							ele2Open=1;
							TowerNum += parseFloat(Meas);
							TowerBoxCount +=1;
						} else {
							//If same Dim2 just insert Dim3 	
							html += '<div class="mmsummary'+ mmOrient +' '+boxesSelectable+'" ' +mmstSummary+'data-value="'+ row[2].qElemNumber + '/2"><span class="mmsummarytxt">'+ Dim3 + '</span><span class="mmAdditionalData">'+measValueToInsert+Dim4ToInsert+'</span></div>';	
							TowerNum += parseFloat(Meas);
							TowerBoxCount +=1;
								
						};
						ele1Open=1;
					} else {
						//If same Dim 1 as before just insert Dim 2
						if(curElement2 != preElement2){
							///Check if unique Dim2 and insert Dim2 and Dim3
							if(ele2Open){
								html += '</div>';
								if(mmTowerTotals != "A"){
									TowerTotArr.push( preElement2+ ':' + TowerNum + ':' + TowerBoxCount);
									TowerTotValsArr.push(TowerNum);
								} else {
									var towerAvg = Math.round(parseFloat(TowerNum/TowerBoxCount) * 100 ) / 100;
									//console.log('avg: '+towerAvg);
									TowerTotArr.push( preElement2+ ':' + towerAvg + ':' + TowerBoxCount);
									TowerTotValsArr.push(towerAvg);
								};
								TowerBoxCount = 0;
								ele2Open=0;
								TowerNum =0;
							};
							if(mmOrient=="h"){
								html += '<div class="mmtower'+ mmOrient + ' '+mmOrientV+' '+towersSelectable+'" ' + mmstTowerh +'data-value="'+ row[1].qElemNumber + '/1">';
							} else {
								html += '<div class="mmtower'+ mmOrient +' '+towersSelectable+'" ' + mmstTowerv +'data-value="'+ row[1].qElemNumber + '/1">';
							};
							html += '<div class="mmtowertitle'+ mmOrient +' '+towersTSelectable+'" ' +mmstTowerTitle+' data-value="'+ row[1].qElemNumber + '/1">'+ Dim2 + '</div>';
							html += '<div class="mmsummary'+ mmOrient +' '+boxesSelectable+'" ' +mmstSummary+'data-value="'+ row[2].qElemNumber + '/2"><span class="mmsummarytxt">'+ Dim3 + '</span><span class="mmAdditionalData">'+measValueToInsert+Dim4ToInsert+'</span></div>';	
							ele2Open=1;
							TowerNum += parseFloat(Meas);
							TowerBoxCount +=1;
						} else {
							//If same Dim2 just insert Dim3 
							html += '<div class="mmsummary'+ mmOrient +' '+boxesSelectable+'" ' +mmstSummary+'data-value="'+ row[2].qElemNumber + '/2"><span class="mmsummarytxt">'+ Dim3 + '</span><span class="mmAdditionalData">'+measValueToInsert+Dim4ToInsert+'</span></div>';	
							TowerNum += parseFloat(Meas);
							TowerBoxCount +=1;

						};

					};

					
					preElement1 = Element1;
					preElement2 = Element2;
					

				});
				if(mmTowerTotals != "A"){
									TowerTotArr.push( preElement2+ ':' + TowerNum + ':' + TowerBoxCount);
									TowerTotValsArr.push(TowerNum);
								} else {
									var towerAvg = Math.round(parseFloat(TowerNum/TowerBoxCount) * 100 ) / 100;
									//console.log('avg: '+towerAvg);
									TowerTotArr.push( preElement2+ ':' + towerAvg + ':' + TowerBoxCount);
									TowerTotValsArr.push(towerAvg);
								};
				//console.log(TowerTotArr);
				//console.log(TowerTotValsArr);
			
			html += '</div></div></div>';

			//Create legend for Dim 4
			if((Dim4isOn) & (Dim4LegendOn) & (mmColourUse == "D")){
				Dim4LegendInsert = '<span class="mmLegendTitle">'+Dim4Title+':</span>';
				var Dim4unique=Dim4EleArr.filter(function(itm,i,Dim4EleArr){
				    return i==Dim4EleArr.indexOf(itm);
				});
				//Dim4Palette
				//console.log(Dim4unique);
				var mmLegendText, mmLegendtragCol, mmLegendEnt, mmLegendEle;
				$.each(Dim4unique, function( index, value ) {
					
 					mmLegendEnt = value.split(":")
  					mmLegendtragCol = mmLegendEnt[0];
  					mmLegendText = mmLegendEnt[1];
  					mmLegendEle = mmLegendEnt[2];
  					Dim4LegendInsert+= '<span class="mmLegendItem selectable" data-value="'+ mmLegendEle + '/3">'+mmLegendText+' <span class="mmLegendCol" style="background-color:#'+mmLegendtragCol+';"> </span> </span> ';
  					//console.log(Dim4Palette);
				});
				

				html+= '<div class="mmLegend">'+Dim4LegendInsert+'</div>';
			};
			//Create legend for measure
			if((mymeasureCount==1) & (mmColourUse == "M")){


				if(layout.qDef.mmColourTarg == "T"){
					var towerMeasureCaveat= "";
					if(mmTowerTotals != "A"){
						towerMeasureCaveat= ", sum of box values";
					} else {
						towerMeasureCaveat= ", avg of box values";
					};

					if(customRangeOn){
						var minTowerVal = parseFloat(layout.qDef.mmCustomRangeMin);
						var maxTowerVal = parseFloat(layout.qDef.mmCustomRangeMax);
						var mTRange = Math.round((parseFloat(layout.qDef.mmCustomRangeMax) - parseFloat(layout.qDef.mmCustomRangeMin)) * 100 ) / 100;
						var mTPart = Math.round((parseFloat(mRange/5)) * 100 ) / 100;
						
					} else {
						
						var maxTowerVal = parseFloat(Math.max.apply(Math,TowerTotValsArr));
						var minTowerVal = parseFloat(Math.min.apply(Math,TowerTotValsArr));
						var mTRange = Math.round((parseFloat(maxTowerVal) - parseFloat(minTowerVal)) * 100 ) / 100;
						var mTPart = Math.round((parseFloat(mTRange/5)) * 100 ) / 100;
						
					};

					var mTSequenceArr = [
						Math.round((parseFloat(minTowerVal)) * 100 ) / 100,
						Math.round((parseFloat(minTowerVal) + (mTPart)) * 100 ) / 100,
						Math.round((parseFloat(minTowerVal) + (mTPart*2)) * 100 ) / 100,
						Math.round((parseFloat(minTowerVal) + (mTPart*3)) * 100 ) / 100,
						Math.round((parseFloat(minTowerVal) + (mTPart*4)) * 100 ) / 100,
						Math.round((parseFloat(maxTowerVal)) * 100 ) / 100
					];

					if(mTRange > 0){

					MeasLegendInsert = '<span class="mmLegendTitle">'+measureTitle+towerMeasureCaveat+' </span>';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > <'+mTSequenceArr[0]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[0]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mTSequenceArr[0]+' - <'+ mTSequenceArr[1]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[1]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mTSequenceArr[1]+' - <'+ mTSequenceArr[2]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[2]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mTSequenceArr[2]+' - <'+ mTSequenceArr[3]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[3]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mTSequenceArr[3]+' - <'+ mTSequenceArr[4]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[4]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mTSequenceArr[4]+' - <'+ mTSequenceArr[5]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[5]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > >='+mTSequenceArr[5]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[6]+';"> </span> </span> ';
  					
  					} else {
  						MeasLegendInsert = '<span class="mmLegendTitle">'+measureTitle+towerMeasureCaveat+' </span>';
	  					MeasLegendInsert+= '<span class="mmLegendItem" > ='+mTSequenceArr[5]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[6]+';"> </span> </span> ';
	  				
  					};

				} else {
					if(mRange > 0){
					MeasLegendInsert = '<span class="mmLegendTitle">'+measureTitle+' </span>';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > <'+mSequenceArr[0]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[0]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mSequenceArr[0]+' - <'+ mSequenceArr[1]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[1]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mSequenceArr[1]+' - <'+ mSequenceArr[2]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[2]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mSequenceArr[2]+' - <'+ mSequenceArr[3]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[3]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mSequenceArr[3]+' - <'+ mSequenceArr[4]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[4]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > '+mSequenceArr[4]+' - <'+ mSequenceArr[5]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[5]+';"> </span> </span> ';
	  				MeasLegendInsert+= '<span class="mmLegendItem" > >='+mSequenceArr[5]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[6]+';"> </span> </span> ';
  					} else {
  						MeasLegendInsert = '<span class="mmLegendTitle">'+measureTitle+' </span>';
	  					MeasLegendInsert+= '<span class="mmLegendItem" > ='+mSequenceArr[5]+' <span class="mmLegendCol" style="background-color:#'+MeasColorArraySeq[6]+';"> </span> </span> ';
	  				
  					};
  				};
  				if(Dim4LegendOn){
					html+= '<div class="mmLegend">'+MeasLegendInsert+'</div>';
				};
			};

			//Render the viz
			$element.html( html );


			// interactions for model

			// set up target elements and vars
			var mmContainerTarg = $element.find(('.modelcontainer'+mmOrient));


			// Colour Towers by measure
			if((mymeasureCount==1) & (layout.qDef.mmColourTarg == "T") & (mmColourUse == "M")){
				//$element.find(('.mmtower'+mmOrient)).css('background-color' , '#00FF00');	
				

				$.each(TowerTotArr, function (d, value){
					var targBits = value.split(":");
					var targTowerId = targBits[0] + "/1";
					var targTowerValue = targBits[1];
					var targTowerBoxCount= targBits[2];
					var targTowerColour = "";
					var targTowerValTxt = "";
					var targTower = $element.find("[data-value='" + targTowerId + "']");
					var targTowerTitle = targTower.find(('.mmtowertitle'+mmOrient));

					
				

					if(targTowerValue < mTSequenceArr[0]){
						targTowerColour = MeasColorArraySeq[0];
						targTowerValTxt = MeasColValTxtD;
					} else if((targTowerValue >= mTSequenceArr[0]) & (targTowerValue < mTSequenceArr[1])){
						targTowerColour = MeasColorArraySeq[1];
						targTowerValTxt = MeasColValTxtD;
					} else if((targTowerValue >= mTSequenceArr[1]) & (targTowerValue < mTSequenceArr[2])){
						targTowerColour = MeasColorArraySeq[2];
						targTowerValTxt = MeasColValTxtD;
					} else if((targTowerValue >= mTSequenceArr[2]) & (targTowerValue < mTSequenceArr[3])){
						targTowerColour = MeasColorArraySeq[3];
						targTowerValTxt = MeasColValTxtD;
					} else if((targTowerValue >= mTSequenceArr[3]) & (targTowerValue < mTSequenceArr[4])){
						targTowerColour = MeasColorArraySeq[4];
						targTowerValTxt = MeasColValTxtL;
					} else if((targTowerValue >= mTSequenceArr[4]) & (targTowerValue < mTSequenceArr[5])){
						targTowerColour = MeasColorArraySeq[5];
						targTowerValTxt = MeasColValTxtL;
					} else if(targTowerValue >= mTSequenceArr[5]){
						targTowerColour = MeasColorArraySeq[6];
						targTowerValTxt = MeasColValTxtL;
					};

					

					targTower.css("background-color", ('#'+targTowerColour));

					targTowerTitle.css("color", ('#'+targTowerValTxt));

					//console.log(targTowerBoxCount);
					if(mmUseMeasure){
						var towerMeasureInsertVal;
						if(mmTowerTotals != "A"){
							towerMeasureInsertVal = '<span style="color: #'+targTowerValTxt+'; font-weight: bold;">Total of boxes: ('+targTowerValue+')</span>';
						} else {
							towerMeasureInsertVal = '<span style="color: #'+targTowerValTxt+'; font-weight: bold;">Avg of boxes: ('+targTowerValue+')</span>';
						} 
						
						targTowerTitle.before(towerMeasureInsertVal);
					}
					//console.log(targTowerId + ' - ' +targTowerValue +' - '+targTowerColour);

				});
							

			};
			
			

			// selections
			$element.find('.selectable').on('qv-activate', function() {
				if(this.hasAttribute("data-value")) {
					var str = this.getAttribute("data-value");
					var eleDim = str.split('/');
					var value = parseInt(eleDim[0], 10), dim = parseInt(eleDim[1], 10);
						self.selectValues(dim, [value], true);
						$(this).toggleClass("selected");
				}
			});
			

			//Controls
			// initially hide the control buttons
			$element.find('.mmControlsUI').siblings('button').toggle();	
			// hide and show toggle
			$element.find('.mmControlsUI').on('click', function() {
					$element.find('.mmControlsUI').siblings('button').toggle();
					if(Dim4LegendOn){
						$element.find('.mmLegend').toggle();
					};
				
					
			});
			

			//position the controls

			var mmlastScrollTop = 0;
			var mmlastScrollLeft = 0;
			var scrollingDiv = $element.find(".mmControlButs");
			if(Dim4LegendOn){
				var scrollingLeg = $element.find(".mmLegend");
			};
			

			$element.parent().parent().scroll(function(){
			   var st = $(this).scrollTop();
			   var sl = $(this).scrollLeft();
			   if (st != mmlastScrollTop){
			      scrollingDiv.stop().animate({"marginTop": ($element.parent().parent().scrollTop() + 5) + "px"}, "fast", "swing" );
			      if(Dim4LegendOn){
			      		scrollingLeg.stop().animate({"top": ($element.parent().parent().scrollTop() + 5) + "px"}, "fast", "swing" );
			      };
			   } ;
			   if (sl != mmlastScrollLeft){
			       scrollingDiv.stop().animate({"marginLeft": ($element.parent().parent().scrollLeft() + 5) + "px"}, "fast", "swing" );
			       if(Dim4LegendOn){
			     		scrollingLeg.stop().animate({"left": ($element.parent().parent().scrollLeft() + 65) + "px"}, "fast", "swing" );
			     	};
			   } ;

			   mmlastScrollTop = st;
			   mmlastScrollLeft = sl;
			});


		

			//Hide Towers
			$element.find('.butHideTows').on('click', function() {
						$element.find(('.mmtower'+mmOrient)).toggle();

						if($element.find(('.mmtower'+mmOrient)).is(":hidden")){
							$element.find('.butHideSums').prop('disabled', true);
							$element.find('.mmHideShowButPlusT').text(function () {
						    	return $(this).text().replace("Q", "P");
							});
						} else {
							$element.find('.butHideSums').prop('disabled', false);
							$element.find('.mmHideShowButPlusT').text(function () {
						   	 return $(this).text().replace("P", "Q");
							});
						};
						

			});
			//Hide Summaries
			$element.find('.butHideSums').on('click', function() {
						$element.find(('.mmsummary'+mmOrient)).toggle();
						if($element.find(('.mmsummary'+mmOrient)).is(":hidden")){
							$element.find('.mmHideShowButPlusB').text(function () {
						    	return $(this).text().replace("Q", "P");
							});
						} else {
							$element.find('.mmHideShowButPlusB').text(function () {
						   	 return $(this).text().replace("P", "Q");
							});
						};	
			});
			//Reset Model 
			$element.find('.butReposition').on('click', function() {
				mmContainerTarg.css('transform', 'scale('+mmDefScale+')' );
				mmContainerTarg.css('marginTop', '0px');
				$element.find(('.mmsummary'+mmOrient)).toggle();
				$element.find(('.mmtower'+mmOrient)).toggle();
				$element.parent().parent().scrollLeft(0);
				$element.parent().parent().scrollTop(0);
				$element.find(('.mmtower'+mmOrient)).show();
				$element.find('.butHideSums').prop('disabled', false);
				$element.find(('.mmsummary'+mmOrient)).show();
				$element.find('.butZoomout').prop('disabled', false);
				$element.find('.butZoomin').prop('disabled', false);
				$element.find('.mmHideShowButPlusT').text(function () {
					   	 return $(this).text().replace("P", "Q");
						});
				$element.find('.mmHideShowButPlusB').text(function () {
					   	 return $(this).text().replace("P", "Q");
						});
				if(mmOrient!="h"){
	  				$element.find('.mmControlButs').css('top', '2px');
	  			};
	  			$element.find('.mmControlsUI').siblings('button').toggle();
					if(Dim4LegendOn){
						$element.find('.mmLegend').toggle();
						$element.find('.mmLegend').css('top', '6px');
					};
				
				if(mmOrient=="h" & !layout.qDef.mmForceScaleOn){
	 				// Resize to fit hit.
	 				
	 				var mmParentDivH = $element.parent().parent().innerHeight();
					var mmContainerH = mmContainerTarg.innerHeight() + 100;
					var mmScaleTarg = Math.round( (parseFloat(mmParentDivH) / parseFloat(mmContainerH)) * 100 ) / 100;
					//console.log(mmContainerTarg.innerHeight());
		  			mmContainerTarg.css('transform', 'scale('+mmScaleTarg+')' );
		  			mmContainerTarg.css('marginTop', '40px');
		  			if(mmOrient!="h"){
		  				$element.find('.mmControlButs').css('top', '-38px');
		  			};
		  			mmContainerTarg.css('transform-origin', 'top left' );
		  			$element.parent().parent().scrollLeft(0);
					$element.parent().parent().scrollTop(0);
				}

			});
			//Zoom in/out
			

			$element.find('.butZoomout').on('click', function() {
					var zoomInc = 0.1;
					var curZoomLevelArr = mmContainerTarg.css('transform');
					if(curZoomLevelArr == "none"){
						var curZoomLevel = 1.0;
					} else {
						var curZoomLevelValues = curZoomLevelArr.match(/-?[\d\.]+/g);
						var curZoomLevel = curZoomLevelValues[0];
					};
					var targZoomLevel = Math.round( (parseFloat(curZoomLevel) - parseFloat(zoomInc)) * 10 ) / 10;
					if(targZoomLevel<0.1){
						$element.find('.butZoomout').prop('disabled', true);
						$element.find('.butZoomin').prop('disabled', false);
					} else {
						$element.find('.butZoomout').prop('disabled', false);
						$element.find('.butZoomin').prop('disabled', false);
						mmContainerTarg.css('transform', 'scale('+targZoomLevel+')' );
						mmContainerTarg.css('transform-origin', 'top left' );
					};
			});
			$element.find('.butZoomin').on('click', function() {
					var zoomIncA = 0.1;
					var curZoomLevelArrA = mmContainerTarg.css('transform');
					if(curZoomLevelArrA == "none"){
						var curZoomLevelA = 1.0;
					} else {
						var curZoomLevelValuesA = curZoomLevelArrA.match(/-?[\d\.]+/g);
						var curZoomLevelA = curZoomLevelValuesA[0];
						//console.log(curZoomLevelA);
					};
					var targZoomLevelA = Math.round( (parseFloat(curZoomLevelA) + parseFloat(zoomIncA)) * 10 ) / 10;
					if(targZoomLevelA>4.0){
						$element.find('.butZoomin').prop('disabled', true);
						$element.find('.butZoomout').prop('disabled', false);
					} else {
						$element.find('.butZoomin').prop('disabled', false);
						$element.find('.butZoomout').prop('disabled', false);
						mmContainerTarg.css('transform', 'scale('+targZoomLevelA+')' );
						mmContainerTarg.css('transform-origin', 'top left' );
					};
			});

			//Fit
			
			$element.find('.butFitHeight').on('click', function() {
				var mmParentDivH = $element.parent().parent().innerHeight();
				var mmContainerH = mmContainerTarg.innerHeight() + 150;
				var mmScaleTarg = Math.round( (parseFloat(mmParentDivH) / parseFloat(mmContainerH)) * 100 ) / 100;
				//console.log(mmContainerTarg.innerHeight());
	  			mmContainerTarg.css('transform', 'scale('+mmScaleTarg+')' );
	  			mmContainerTarg.css('marginTop', '40px');
	  			if(mmOrient!="h"){
	  				$element.find('.mmControlButs').css('top', '-38px');
	  			};
	  			mmContainerTarg.css('transform-origin', 'top left' );
	  			$element.parent().parent().scrollLeft(0);
				$element.parent().parent().scrollTop(0);	
					
			});
			$element.find('.butFitWidth').on('click', function() {
				var mmParentDivW = $element.parent().parent().innerWidth();
				var mmContainerW = mmContainerTarg.innerWidth();
				var mmScaleTarg = Math.round( (parseFloat(mmParentDivW) / parseFloat(mmContainerW)) * 100 ) / 100;

	  			mmContainerTarg.css('transform', 'scale('+mmScaleTarg+')' );
	  			mmContainerTarg.css('marginTop', '40px');
	  			if(mmOrient!="h"){
	  				$element.find('.mmControlButs').css('top', '-38px');
	  			};
	  			mmContainerTarg.css('transform-origin', 'top left' );
	  			$element.parent().parent().scrollLeft(0);
				$element.parent().parent().scrollTop(0);
	  			
					
			});

			$element.ready(function() {
				if(mmOrient=="h" & !layout.qDef.mmForceScaleOn){
	 				// Resize to fit hit.
	 				
	 				var mmParentDivH = $element.parent().parent().innerHeight();
					var mmContainerH = mmContainerTarg.innerHeight() + 150;
					var mmScaleTarg = Math.round( (parseFloat(mmParentDivH) / parseFloat(mmContainerH)) * 100 ) / 100;
					//console.log(mmContainerTarg.innerHeight());
		  			mmContainerTarg.css('transform', 'scale('+mmScaleTarg+')' );
		  			mmContainerTarg.css('marginTop', '40px');
		  			if(mmOrient!="h"){
		  				$element.find('.mmControlButs').css('top', '-38px');
		  			};
		  			mmContainerTarg.css('transform-origin', 'top left' );
		  			$element.parent().parent().scrollLeft(0);
					$element.parent().parent().scrollTop(0);
				}
			});

			
			$element.find('.butPrint').on('click', function() {
				 var mmToPrint = 'mmI'+mmuniqueID;
			     var printContents = document.getElementById(mmToPrint).innerHTML;
			     //var originalContents = document.body.innerHTML;


			     document.body.innerHTML = '<div class="mmPrintMessage">Print using the browser, then choose a large format (best from a PDF writer) to output to, eg A0 as this will help tiling.<br><br>'
			     +'If your print dialogue does not allow for large pages, you can "shrink" the model using these controls.<br><br>'
			     + 'Size: <button class="lui-button" onclick="var tg=document.getElementById(\'mmIComtainer\'); tg.style.transformOrigin=\'0 0\'; tg.style.transform=\'scale(0.5)\'; tg.style.width=\'200%\';">1:2</button>'
			     + '<button class="lui-button" onclick="var tg=document.getElementById(\'mmIComtainer\'); tg.style.transformOrigin=\'0 0\'; tg.style.transform=\'scale(0.25)\'; tg.style.width=\'400%\';">1:4</button>'
			     + '<button class="lui-button" onclick="var tg=document.getElementById(\'mmIComtainer\'); tg.style.transformOrigin=\'50% 50%\'; tg.style.transform=\'scale(1.0)\'; tg.style.width=\'100%\';"">1:1</button>'
			     +'<br><br><button class="lui-button" onclick="location.reload();">Return to sheet</button></div><div id="mmIComtainer">'+printContents+'</div>';

			     

			     document.body.className = "";
			     document.body.className = 'qv-object-MGOMentalModel forceShow';
			     document.body.style.overflow = 'scroll';
			     
			});

			
			return Promise.resolve();
	
		}
		
	};
} );

