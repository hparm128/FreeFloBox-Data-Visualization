{"note":"console.log('Is this working?');\n\nlet viz;\n\n\/\/Add Share Link to Tableau Public in here\nconst url = \"https:\/\/public.tableau.com\/views\/FreeFloBoxsFreeMenstrualProducts\/FreeFloBoxsStory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link\";\n\nconst vizContainer = document.getElementById('vizContainer');\nconst options = {\n    hideTabs: true,\n    height: 1000,\n    width: 1200,\n    onFirstInteraction: function() {\n        workbook = viz.getWorkbook();\n        activeSheet = workbook.getActiveSheet();\n        console.log(\"My dashboard is interactive\");\n    }\n};\n\n\/\/create a function to generate the viz element\nfunction initViz() {\n    console.log('Executing the initViz function!');\n    viz = new tableau.Viz(vizContainer, url, options);\n}\n\n\/\/ run the initViz function when the page loads\ndocument.addEventListener(\"DOMContentLoaded\", initViz);\n\nconst exportPDF = document.getElementById('exportPDF');\nconst exportImage = document.getElementById('exportImage');\n\n\n\/\/click on the pdf button to generate pdf of dashboard\nfunction generatePDF() {\n    viz.showExportPDFDialog()\n}\n\nexportPDF.addEventListener(\"click\", function () {\n    generatePDF();\n  });\n\n\/\/click on image to generate image of dashboard\nfunction generateImage() {\n    viz.showExportImageDialog()\n}\n\nexportImage.addEventListener(\"click\", function () {\n    generateImage();\n  });","bgColorIndex":0,"textColorIndex":1}