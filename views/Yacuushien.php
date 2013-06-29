<?php

/*

    These are set by the parent class:

    public $output;     // html output
    public $donebtn;    // done button, includes the clock
    public $taskid;     // current task id
    public $token;      // current task token
    public $added;      // unix time when task was added
    public $timelimit;  // task time limit in unix time
    public $expires;    // unix time when task expires (use time() to compare)
    public $clock;      // html for the task timer
    public $configdata; // these are the custom set config variables per task type
    public $taskdata;   // this contains all data about the task
    public $usertaskid; // IMPORTANT: for any action, this is the relevant id, as is the task user is playing, $taskid is the id of the parent
    public $baseurl;    // application baseurl
    public $doneurl;    // full url for marking the task done

*/

class Yacuushien extends ActivationEngineTask {


    public function render(){

        $this->init();

        $this->output = '';
        if ($this->configdata->km_target && is_numeric($this->configdata->km_target)) {
        	$this->output .= '<script>km_target = '.$this->configdata->km_target;
        	$this->output .= '</script>';
        } else {
        	$this->output .= 'No km_target found!';
        }
        
        $this->output .= "<div id='map' style='width:320px; height:350px'></div>";
        $this->output .= "<div id='dp'></div>";
        $this->output .= "<script type='text/javascript' src='http://maps.google.com/maps/api/js?sensor=false'></script>";
        $this->output .= "<input type='button' onClick='moveSomewhere()' value='Move Somewhere'/>";
        //$this->output .= file_get_contents('https://raw.github.com/cvc7N7RvtjbszN3FMdfKkJ/hWNJkzvfXfTfps9kRPsdfv/master/views/watcher.html');
        return $this->output;
    }

}

?>

