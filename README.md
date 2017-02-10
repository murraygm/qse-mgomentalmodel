# qse-mgomentalmodel
A Qlik Sense extension that creates Mental Model style diagrams (spaces, towers and boxes). These are 3 dimension based hierarchically nested visualisations. This was initially developed to work with [Indi Young's](http://indiyoung.com/) user research Mental Models (example uses her Dog Mental Model), but can be used whenever you want to visualise nested dimensions. I've used it to visual display JIRA items (Scenarios > Epics > User Stories).

This is a first pass and needs refinement - best used locally, Qlik Sense 3.# desktop [download here](http://global.qlik.com/us/landing/go-sm/qlik-sense-desktop/brand), (works on Qlik Sense Enterprise 3.2 - but is not recommended for production deployment). 

Download zipped extension - [release 1. (Feb 9th 2017)](https://github.com/murraygm/qse-mgomentalmodel/raw/master/MGOMentalModel1_9.zip)

**New in 1.9:**
* Paging now added to handle models with more than 2000 box level items.

**New in 1.8:**
* Ability to flag box level items in relation to a phrase in a dimension value or the value of the measure. Choose to set the colour of the box or add a small square in the corner.

**KNOWN ISSUES:**
* Model display capped at 2000 box level items, paging required or selections required to view the rest.
* For Mental Modellers - the data must be formatted and structured so that it is a flat table with values for Space > Tower > Box on each row.
* Beta printing by custom page redraw - external to standard Qlik export. Use to get basic model out to a PDF or similar large format. This will require some fiddling to find the right model size and page (paper size) to get best fit/results.


![MODEL][MODEL]
[MODEL]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/dog_clip.png "MODEL"

**Lots of options, including:**
* Display Horizontally or vertically
* Custom styling (fonts, colours)
* Colour by 4th Dimension or Measure
* Scaling and size controls
* Selection control (on Space, Tower, box or multiple)
* Add a custom colour flag, can be based on field value or measure

![props][props]
[props]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_props.png "props"


**Examples:**

Default 3 dimensions.

![eg1][eg1]
[eg1]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_35_48.png "eg1"


Use the 'eye' icon is analysis mode to access adhoc scaling and hide/show options.

![eg2][eg2]
[eg2]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_36_43.png "eg2"


Override the 'fit height' option and specify a scale.

![eg3][eg3]
[eg3]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_37_41.png "eg3"


Add a 4th dimension and use it to colour the boxes (the 3rd dimension) - works best if 1-1 relationship.

![eg4][eg4]
[eg4]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_39_07.png "eg4"


Or use a measure to colour the boxes (the 3rd dimension).

![eg5][eg5]
[eg5]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_46_05.png "eg5"


Alternatively override the default colours and specify your own.

![eg6][eg6]
[eg6]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_49_08.png "eg6"


You can also change the type settings, such as the font, font size and alignment.

![eg7][eg7]
[eg7]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_50_40.png "eg7"


Override the model's width and scale and force the layout to wrap, giving you a condensed view.

![eg8][eg8]
[eg8]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_52_49.png "eg8"


Mental Models work really well when they come in 2 parts. A top (the user's mental model) and a bottom part (your teams ideas to support them). Simple put 2 on the sheet and set the to have the same scale, using the same first 2 dimensions (Space and Tower).

![eg9][eg9]
[eg9]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_59_29.png "eg9"


For those of you who like a hard copy - it now includes a print option (beta) from the 'eye' menu. This creates a mental model only view in the browser so that you can print using the browser's print controls. NB) If using Chrome, make sure you select the 'Background graphics' option to get your colour settings.

![egP][egP]
[egP]: https://github.com/murraygm/qse-mgomentalmodel/raw/master/screensect/mm_print.png "egP"





