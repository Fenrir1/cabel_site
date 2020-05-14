cabels = [
{
    id: 1,
    name: "cabel 1",
    image: "assets/cab1.jpg",
    driver: "assets/PL23XX_Prolific_DriverInstaller_v200.zip"
},
{
    id: 2,
    name: "cabel 2",
    image: "assets/cab2.jpg",
    driver: "assets/PL23XX_Prolific_DriverInstaller_v200.zip"
},
{
    id: 3,
    name: "cabel 3",
    image: "assets/cab3.jpg",
    driver: "assets/PL23XX_Prolific_DriverInstaller_v200.zip"
},
{
    id: 4,
    name: "cabel 4",
    image: "assets/cab4.jpg",
    driver: "assets/PL23XX_Prolific_DriverInstaller_v200.zip"
},
{
    id: 5,
    name: "cabel 5",
    image: "assets/cab5.jpg",
    driver: "assets/PL23XX_Prolific_DriverInstaller_v200.zip"
},
{
    id: 6,
    name: "cabel 6",
    image: "assets/cab6.jpg",
    driver: "assets/PL23XX_Prolific_DriverInstaller_v200.zip"
},
{
    id: 7,
    name: "cabel 7",
    image: "assets/cab7.jpg",
    driver: "assets/PL23XX_Prolific_DriverInstaller_v200.zip"
},
{
    id: 8,
    name: "cabel 8",
    image: "assets/cab8.jpg",
    driver: "assets/PL23XX_Prolific_DriverInstaller_v200.zip"
},
];

selectedCabel = null;

function clearSelection() {
    $("#cabel-image").attr("src", "assets/cab0.jpg");
    $("#cabel-driver-link").attr("href", "#");
    $(".cabel-driver-card").hide();
}

function selectCabelId(id) {
    $("#cabel-select-selector").val(id);
    $("#cabel-select-selector").trigger( "change" );
}

function selectCabelHandler(val) {
    selectedCabel = cabels.filter(({id}) => { return id == parseInt(val); })[0] || null;
    if (selectedCabel) {
        $("#cabel-image").attr("src", selectedCabel.image);
        $("#cabel-driver-link").attr("href", selectedCabel.driver);
        $(".cabel-driver-card").show();
    } else {
        clearSelection();
    }

    console.log(selectedCabel);
}

function formatSelectCabel(state) {
    if (!state.id) {
      return state.text;
    }
    console.log(state);
    let curCabelId = state.element.value;
    let curCabel = cabels.filter(({id}) => { return id == parseInt(curCabelId); })[0] || null;
    if (curCabel) {
        let $state = $(
            '<span><img src="'+curCabel.image+'" class="img-cabel-icon" alt="" /> ' + state.text + '</span>'
          );
        return $state;
    }
    return state;
  };

$(document).ready(function() {
    $("#cabel-select-selector").select2({
        templateResult: formatSelectCabel
    })
    .on('select2-open', function() {

        // however much room you determine you need to prevent jumping
        var requireHeight = 600;
        var viewportBottom = $(window).scrollTop() + $(window).height();

        // figure out if we need to make changes
        if (viewportBottom < requireHeight) 
        {           
            // determine how much padding we should add (via marginBottom)
            var marginBottom = requireHeight - viewportBottom;

            // adding padding so we can scroll down
            $(".aLwrElmntOrCntntWrppr").css("marginBottom", marginBottom + "px");

            // animate to just above the select2, now with plenty of room below
            $('html, body').animate({
                scrollTop: $("#mySelect2").offset().top - 10
            }, 1000);
        }
    });    
});
