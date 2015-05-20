$(document).ready(function () {
    
   /**
     * 
     * get condition
     * 
     * @param {int} code
     * @returns string
     */
    function getConditions(code) {
        var result = 'undefined';
        switch (code) {
            case "0":
                result = 'tufão';
                break;
            case "1":
                result = 'tempestade tropical';
                break;
            case "2":
                result = 'furacão';
                break;
            case "3":
                result = 'tempestades fortes';
                break;
            case "4":
                result = 'trovoadas';
                break;
            case "5":
                result = 'neve e chuva';
                break;
            case "6" || "35":
                result = 'chuva e granizo';
                break;
            case "7":
                result = 'granizo e neve';
                break;
            case "8":
                result = 'chuvisco congelado';
                break;
            case "9":
                result = 'chuvisco';
                break;
            case "10":
                result = 'chuva congelada';
                break;
            case "12":
            case "11":
                result = 'pancadas de chuva';
                break;
            case "13":
                result = 'flocos de neve';
                break;
            case "15":
            case "14":
                result = 'pancadas de neve';
                break;
            case "16":
                result = 'neve';
                break;
            case "17":
                result = 'granizo';
                break;
            case "18":
                result = 'chuva com neve';
                break;
            case "19":
                result = 'poeira';
                break;
            case "20":
                result = 'nebuloso';
                break;
            case "21":
                result = 'névoa';
                break;
            case "22":
                result = 'enfumaçado';
                break;
            case "23":
                result = 'tempestuoso';
                break;
            case "24":
                result = 'ventoso';
                break;
            case "25":
                result = 'frio';
                break;
            case "26":
                result = 'nublado';
                break;
            case "27":
                result = 'noite nublada';
                break;
            case "28":
                result = 'dia nublado';
                break;
            case "29":
                result = 'noite parcial nublado';
                break;
            case "30":
                result = 'dia parcial nublado';
                break;
            case "31":
                result = 'noite clara';
                break;
            case "32":
                result = 'ensolarado';
                break;
            case "33":
                result = 'noite razoável';
                break;
            case "34":
                result = 'dia razoável';
                break;
            case "36":
                result = 'quente';
                break;
            case "37":
                result = 'trovoadas isoladas';
                break;
            case "39":
            case "38":
                result = 'Trovoadas dispersas';
                break;
            case "40":
                result = 'chuvas esparsas';
                break;
            case "43":
            case "41":
                result = 'neve pesada';
                break;
            case "42":
                result = 'insistência de neve';
                break;
            case "44":
                result = 'parcial nublado';
                break;
            case "45":
                result = 'chuvas fortes';
                break;
            case "46":
                result = 'pancadas de neve';
                break;
            case "47":
                result = 'chuvas fortes isolada';
                break;
            case "3200":
                result = 'Não disponível';
                break;
        }
        return result;
    }

    function getDayName(day, short, $byshort) {
        var dia = 'undefined';
        var diaF = 'undefined';

        switch (day) {
            case !$byshort ? 0 : 'Sun':
                dia = "Dom";
                diaF = "Domingo";
                break;
            case !$byshort ? 1 : 'Mon':
                dia = "Seg";
                diaF = "Segunda";
                break;
            case !$byshort ? 2 : 'Tue':
                dia = "Ter";
                diaF = "Terça";
                break;
            case !$byshort ? 3 : 'Wed':
                dia = "Qua";
                diaF = "Quarta";
                break;
            case !$byshort ? 4 : 'Thu':
                dia = "Qui";
                diaF = "Quinta";
                break;
            case !$byshort ? 5 : 'Fri':
                dia = "Sex";
                diaF = "Sexta";
                break;
            case !$byshort ? 6 : 'Sat':
                dia = "Sab";
                diaF = "Sábado";
                break;
        }

        if (short === false) {
            return dia;
        } else {
            return diaF;
        }
    }

    function FtoC(temperature) {
        f = (temperature - 32) * 5 / 7;
        return f.toPrecision(2);
    }

    function getSkyIcon(code) {
        result = 'clear-day';
        switch (code) {
            case "26":
                result = 'cloudy';
                break;
            case "30":
                result = 'partly-cloudy-day';
                break;
            case "47":
                result = 'cloudy';
                break;
            case "40":
                result = 'rain';
                break;
            case "11":
            case "12":
            case "45":
                result = 'sleet';
                break;
            case "34":
                result = 'clear-day';
                break;
            case "27":
            case "29":
                result = 'partly-cloudy-night';
                break;
            case "33":
            case "31":
                result = 'clear-night';
                break;
            case "24":
                result = 'wind';
                break;
            case "5":
            case "7":
            case "13":
            case "14":
            case "15":
            case "16":
            case "18":
            case "43":
            case "41":
            case "42":
            case "46":
                result = 'snow';
                break;
            case "21":
                result = 'fog';
                break;
        }
        return result;
    }

     $("#getloc").click(function () {
        navigator.geolocation.getCurrentPosition(locateSuccess, locateFail);

        function locateSuccess(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            $.getJSON("../ajax/weather.php?request=myGeoLocation&latitude=" + latitude + "&longitude=" + longitude, function (json) {
                var location = json.query["results"].channel["location"];
                var $conditions = json.query["results"].channel["item"].condition;
                var date = new Date(json.query["created"]);
                var mph = json.query["results"].channel["wind"].chill;
                var humidity = json.query["results"].channel["atmosphere"].humidity;
                var $nextDays = json.query["results"].channel["item"].forecast;
                var icons_grey = new Skycons({
                    "color": "#8b91a0"
                });

                $("#weather_title").html(location.city + " " + location.region);
                $("#weather_temp").html(FtoC($conditions["temp"])); // calculate temperature from Fº to Cº
                $("#weather_condition").html(getConditions($conditions["code"]));

                $("#weather_current_day").html(getDayName(date.getDay()), true, false);
                $("#weather_mph").html(mph);
                $("#weather_humidity").html(humidity + "%");
                $("#weather_nextdays").html('');
                var i = 0;
                $.each($nextDays, function (k, obj) {
                    i++;
                    $("#weather_nextdays").append('<div class="p-b-10 m-b-10 b-grey b-b">' +
                            '<div class="pull-left"> <span class="bold text-black m-r-15 text-right">' + getDayName(obj['day'], false, true) + '</span>' +
                            '<canvas id="skycons_widget_' + i + '" width="20" height="20" class="inline m-l-10"></canvas>' +
                            '<p class="bold text-extra-small semi-bold text-grey">' + getConditions(obj['code']) + '</p>' +
                            '</div>' +
                            '<div class="pull-right"> <span class="semi-bold text-grey">' + FtoC(obj['low']) + ' - ' + FtoC(obj['high']) + '</span> <span class="bold text-error">&deg; C</span> </div>' +
                            '<div class="clearfix"></div>' +
                            '</div>'
                            );
                    icons_grey.set("skycons_widget_" + i, getSkyIcon(obj['code']));
                });
                icons_grey.set("#widget-2-cloudy-big", getSkyIcon($conditions["code"]));
            });
        }
        
        // Unsuccessful geolocation 
        function locateFail(geoPositionError) {
            switch (geoPositionError.code) {
                case 0: // UNKNOWN_ERROR 
                    alert('An unknown error occurred, sorry');
                    break;
                case 1: // PERMISSION_DENIED 
                    alert('Permission to use Geolocation was denied');
                    break;
                case 2: // POSITION_UNAVAILABLE 
                    alert("Couldn't find you...");
                    break;
                case 3: // TIMEOUT 
                    alert('The Geolocation request took too long and timed out');
                    break;
                default:
            }
        }
    });
    
});
