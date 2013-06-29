<?php

/*

This is the admin form configuration which you can find under admin interface for games.

NOTE: all fields are named config[yourfieldname], nothing else will work. You can invent any
field names, these are available when rendering the view (under views/)

supported field types, uses Yii Booster, this would be your best source of information:
http://www.yiiframework.com/forum/index.php/topic/36258-yiibooster/

'text' => 'textFieldRow',
'password' => 'passwordFieldRow',
'textarea' => 'textAreaRow',
'file' => 'fileFieldRow',
'radio' => 'radioButtonRow',
'checkbox' => 'checkBoxRow',
'listbox' => 'dropDownListRow',
'dropdownlist' => 'dropDownListRow',
'checkboxlist' => 'checkBoxListRow',
'radiolist' => 'radioButtonListRow',

//HTML5 types not supported in YiiBooster yet: render as textField
'url' => 'textFieldRow',
'email' => 'textFieldRow',
'number' => 'textFieldRow',

//'range'=>'activeRangeField', not supported yet
'date' => 'datepickerRow',

//new YiiBooster types
'captcha' => 'captchaRow',
'daterange' => 'dateRangeRow',
'redactor' => 'redactorRow',
'markdowneditor' => 'markdownEditorRow',
'uneditable' => 'uneditableRow',
'radiolistinline' => 'radioButtonListInlineRow',
'checkboxlistinline' => 'checkBoxListInlineRow',
'select2' => 'select2Row'

*/

return array(
    'config[km_target]' => array('type'=>'number', 'title'=>'KM Target', 'onChange' => 'km_target_changed()'),
    'config[target_method]' => array('type'=>'checkbox', 'title'=>'Cumulative points?', 'onChange' => 'km_target_method_changed()'),
    'config[lat_target]' => array('type'=>'text','title' => 'Target location (latitude)', 'onChange'=> 'target_loc_changed()'),
    'config[lon_target]' => array('type'=>'text','title' => 'Target location (longitude)', 'onChange'=> 'target_loc_changed()'),
    'config[dis_limit]' => array('type'=>'text','title' => 'Distance limit (km)', 'onChange' => 'distance_limit_changed()'),
);
/*return array(
    'config[subject]' => array('type'=>'text', 'title'=>'%subject%', 'onChange' => 'this.form.submit()'),
    'config[km_target]' => array('type'=>'number', 'title'=>'KM Target', 'onChange' => 'km_target_changed()'),
    'config[msg]' => array('type'=>'redactor',
                        'class' => 'span2',
                        'rows'=>10,
                        'hint' => '{%msg_hint%}',
                        'options' => array(
                            'fileUpload' => 'testFileUpload.php',
                            'imageUpload' => 'testImageUpload.php',
                            'width'=>'100%',
                            'height'=>'400px')

    ),

    'config[shortmsg]' => array('type'=>'textarea','rows'=>5, 'width' => '100%', 'maxlength' => 200, 'hint' => '{%shortmsg_hint%}'),
);*/


?>