<?php

class weather{

    /**
     * Magic Metthod
     * 
     * @access public
     * @return array|JSON
     */
    public function __construct() {
        $json_error = json_encode(array('error' => TRUE));
        // checks if is an ajax request
        if (self::isAjaxRequest()) {
            return print self::_getWeatherForecastViaYahoo();
        }
        return $json_error;
    }
  
    /**
     * Get json data from API weather yahoo
     * 
     * @return arry
     */
    private static function _getWeatherForecastViaYahoo() {
        $BASE_URL = "http://query.yahooapis.com/v1/public/yql";
        $yql_query = sprintf('select * from weather.forecast where woeid in (select woeid from geo.placefinder where text="%1$s,%2$s" and gflags="R")', $_GET['latitude'], $_GET['longitude']);
        $yql_query_url = $BASE_URL . "?q=" . urlencode($yql_query) . "&format=json&u=c";

        // Make call with cURL
        $session = curl_init($yql_query_url);
        curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
        $json = curl_exec($session);
        // Convert JSON to PHP object
        self::$weatherObj = json_decode($json);
        return $json;
    }
    
    /**
     * 
     * Checks is ajax request
     * 
     * @return boolean
     */
    protected static function isAjaxRequest() {
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }
}

// load ajax
new weather();
