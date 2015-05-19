$(document).ready(function () {
    
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
            case "30":
                result = 'PARTLY_CLOUDY_DAY';
                break;
            case "45":
            case "47":
                result = 'cloudy';
                break;
            case "40":
                result = 'rain';
                break;
            case "11":
            case "12":
                result = 'sleet';
                break;
            case "34":
                result = 'clear-day';
                break;
        }
        return result;
    }
    
});
