(function (blocks, element) {
    var el = element.createElement;

    var blockStyle = {
        backgroundColor: '#900',
        color: '#fff',
        padding: '20px',
    };

    blocks.registerBlockType('forecast-shortcodes/forecast-widget', {
        title: 'Weather Widget',
        description: 'Inserts current weather widget',
        icon: 'cloud',
        category: 'widgets',
        example: {},
        //EDIT
        edit: function(props) {
            // How our block renders in the editor in edit mode
           
            function updateCity( event ) {
               props.setAttributes( { city: event.target.value } );
            }
            /*
            function updateContent( newdata ) {
               props.setAttributes( { content: newdata } );
            }
            */
            function updateType( event ) {
               props.setAttributes( { type: event.target.value } );
            }
            return el( 'div', 
               { 
                  className: 'notice-box notice-' + props.attributes.type
               }, 
               el(
                  'select', 
                  {
                     onChange: updateType,
                     value: props.attributes.type,
                  },
                  el("option", {value: "current" }, "Current"),
                  el("option", {value: "five-day" }, "Five Day"),
                  el("option", {value: "five-day-detailed" }, "Five Day Detailed")
               ),
               el(
                  'input', 
                  {
                     type: 'text', 
                     placeholder: 'Enter City name here...',
                     value: props.attributes.city,
                     onChange: updateCity,
                     style: { width: '100%' }
                  }
               ) 
            ); // End return
         },
        //END EDIT
        save: function () {
            return el(
                'p',
                null,
                `[weather city="${props.attributes.city}" type="${props.attributes.type}"]`
                /*
                'p',
                { style: blockStyle },
                'Hello World, step 1 (from the frontend).'
                */
                );
        },
        attributes: {   // The data this block will be storing
            type: { type: 'string', default: 'current' },   // Notice box type for loading the appropriate CSS class. Default class is 'default'.
            city: { type: 'string', default: 'Sofia,Bulgaria' },   // Notice box title in h4 tag
            //content: { type: 'array', source: 'children', selector: 'p' }  /// Notice box content in p tag
        },
    });
}(
    window.wp.blocks,
    window.wp.element
));