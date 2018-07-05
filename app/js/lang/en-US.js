var lang = {
  title: 'SimPad Control Panel',
  selectDevice: 'Select Devices',
  selectOperation: 'Select Operation',
  detailedSettings: 'Detailed Settings',
  apply: 'Apply',
  conInfo: 'Please connect and select your device',
  refresh: 'Refresh',
  confirmAndNext: 'Connect',
  chooseInfo: 'Select the operation you want to perform',
  changeKeyCodeBT: 'Modify Shortcuts',
  changeLightsBT: 'Modify Lighting',
  otherSettingsBT: 'Others',
  pleaseWait: 'Please wait...',
  successToApply: 'Success!',
  returnToContinue: 'Return',
  exitProgram: 'Exit',

  edit: 'Edit',

  changeKeyCode: 'Edit Shortcuts',
  changeKeyCodeInfo:
    'Shortcuts can be set separatly, supports basic key combination',
  viewKeyMap: 'View shortcuts for device',

  changeLights: 'Lights Mode & Color',
  changeLightsInfo:
    'You can adjust lights mode or set colours for each lights of groups',
  viewLightsMap: 'View lighting configuration',
  lightsMode: 'Mode',
  easeOut: 'Fade out',
  easeIn: 'Fade in',
  keepOn: 'Always on',
  keepOff: 'Off',
  keyPress: 'Key Press',
  colorAndBrightness: 'Color', // & Brightness
  setBrightness: 'Set brightness',

  keyDelay: 'Input Debounce',
  keyDelayInfo: `SimPad uses an advanced ID (input debounce) technology that is different from other keyboard, which can significantly control the delay caused by ID function
  <br>But you can still adjust the delay  for the ID function to be triggered, which will affect the experience when the keys are raised`,
  delay: 'Delay',

  advancedOptions: 'Advanced Options',
  advancedOptionsInfo: `You can fine tune some settings here, recommended for pro users，
  <br>All changes made in Advanced Options are applied immediately`,
  sendDataPack: 'Send Data Packets',
  sendDataPackInfo: `If you are familiar with SimPad data format，you can send data directly to the device，
  <br>Your text input will be treated as raw hex data, separated by space`,
  sendDataPackBtn: 'Send',

  superSpeedMode: 'Full Speed Mode',
  superSpeedModeInfo:
    'You can enable "full speed mode" to disable all lights to get the fastest speed, reboot device to apply.',
  superSpeedModeeBtnOn: 'On',
  superSpeedModeeBtnOff: 'Off',

  resetDevice: 'Reset Device',
  resetDeviceInfo: 'Device can be reset to default settings',
  resetDeviceBtn: 'Reset',

  about: 'About SimPad',
  checkUpdate: 'Check Update',
  aboutText: `<p>Thank you for using SimPad!</p>
  <p>SimPad is a custom keyboard based on C51 realize, gets its name from the Simple and Pad, indicates that the equipment is Simple and practical, in the process of the development of the keyboard by the following people for help,</p>
  <p> Thank you very much.</p>
  <p></p>
  <p class="nameBefore">Sayobot小夜</p>
  <p class="nameBefore">noodlefighter</p>
  <p class="nameBefore">kd飞飞</p>
  <p class="nameBefore">rikka0w0</p>
  <p class="nameBefore">晨旭</p>
  <p class="nameBefore">Antecer</p>
  <p></p>
  <p>Special thanks</p>
  <p>English interpreter</p>
  <p class="nameBefore">Jeff - Source Localization Team</p>
  <p class="nameBefore">HDY</p>
  <p></p>
  <a href="https://www.bysb.net">
    <p class="canBeSeleted">View the keyboard publishing page</p>
  </a>
  <a href="https://www.bysb.net">
    <p class="canBeSeleted">View Handle's Blog</p>
  </a>
  <p></p>
  <p>By Handle</p>
  <p>Last Update At 2018.7.4</p>`,

  changesCount: 'Changes to apply',
  abandonsChanges: 'Discard all changes',
  applyToDevice: 'Apply To Device',

  selectedDevice: 'Current Device',
  noDevice: 'Awaiting selection',
  reselectDevice: 'Select another device',

  //DevicesNames
  simpadv2: 'SimPad v2',

  //ForKeyboard
  key_esc: 'Esc',
  key_f1: 'F1',
  key_f2: 'F2',
  key_f3: 'F3',
  key_f4: 'F4',
  key_f5: 'F5',
  key_f6: 'F6',
  key_f7: 'F7',
  key_f8: 'F8',
  key_f9: 'F9',
  key_f10: 'F10',
  key_f11: 'F11',
  key_f12: 'F12',
  key_prtSc: 'Print Screen',
  key_scrLk: 'Sroll Lock',
  key_pauseBreak: 'Pause Break',
  key_waveLine: '~ `',
  key_1: '! 1',
  key_2: '@ 2',
  key_3: '# 3',
  key_4: '$ 4',
  key_5: '% 5',
  key_6: '^ 6',
  key_7: '&amp; 7',
  key_8: '* 8',
  key_9: '( 9',
  key_0: ') 0',
  key_bar: '_ -',
  key_equal: '+ =',
  key_bsp: 'Backspace',
  key_ins: 'Ins',
  key_home: 'Home',
  key_pageUp: 'Page Up',
  key_numPad_numLk: 'Num Lock',
  key_numPad_slash: '/',
  key_numPad_asterisk: '*',
  key_numPad_bar: '-',
  key_tab: 'Tab',
  key_q: 'Q',
  key_w: 'W',
  key_e: 'E',
  key_r: 'R',
  key_t: 'T',
  key_y: 'Y',
  key_u: 'U',
  key_i: 'I',
  key_o: 'O',
  key_p: 'P',
  key_leftParenthesis: '{ [',
  key_rightParenthesis: '} ]',
  key_backSlant: '| \\',
  key_del: 'Del',
  key_end: 'End',
  key_pgDn: 'Page Down',
  key_numPad_7: '7 Hom',
  key_numPad_8: '8 ↑',
  key_numPad_9: '9 PgU',
  key_numPad_add: '+',
  key_capsLock: 'CapsLock',
  key_a: 'A',
  key_s: 'S',
  key_d: 'D',
  key_f: 'F',
  key_g: 'G',
  key_h: 'H',
  key_j: 'J',
  key_k: 'K',
  key_l: 'L',
  key_semicolon: ': ;',
  key_quotationMark: '" \'',
  key_enter: 'Enter',
  key_numPad_4: '4 ←',
  key_numPad_5: '5',
  key_numPad_6: '6 →',
  key_leftShift: 'Shift',
  key_z: 'Z',
  key_x: 'X',
  key_c: 'C',
  key_v: 'V',
  key_b: 'B',
  key_n: 'N',
  key_m: 'M',
  key_comma: '&lt; ,',
  key_period: '&gt; .',
  key_questionMark: '? /',
  key_rightShift: 'Shift',
  key_upArrow: '↑',
  key_numPad_1: '1 End',
  key_numPad_2: '2 ↓',
  key_numPad_3: '3 PgD',
  key_numPad_enter: 'Enter',
  key_leftCtrl: 'Ctrl',
  key_leftWin: '&#xF17A',
  key_leftAlt: 'Alt',
  key_space: 'Space',
  key_rightAlt: 'Alt',
  key_rightWin: '&#xF17A',
  key_menu: '&#xF022',
  key_rightCtrl: 'Ctrl',
  key_leftArrow: '←',
  key_downArrow: '↓',
  key_rightArrow: '→',
  key_numPad_0: '0 Ins',
  key_numPad_period: 'Del .',

  //ForKeyboard TextInfo
  keyN_null: 'Null',

  keyN_esc: 'Esc',
  keyN_f1: 'F1',
  keyN_f2: 'F2',
  keyN_f3: 'F3',
  keyN_f4: 'F4',
  keyN_f5: 'F5',
  keyN_f6: 'F6',
  keyN_f7: 'F7',
  keyN_f8: 'F8',
  keyN_f9: 'F9',
  keyN_f10: 'F10',
  keyN_f11: 'F11',
  keyN_f12: 'F12',
  keyN_prtSc: 'Print Screen',
  keyN_scrLk: 'Sroll Lock',
  keyN_pauseBreak: 'Pause Break',
  keyN_waveLine: '~',
  keyN_1: '1',
  keyN_2: '2',
  keyN_3: '3',
  keyN_4: '4',
  keyN_5: '5',
  keyN_6: '6',
  keyN_7: '7',
  keyN_8: '8',
  keyN_9: '9',
  keyN_0: '0',
  keyN_bar: '-',
  keyN_equal: '=',
  keyN_bsp: 'Backspace',
  keyN_ins: 'Insert',
  keyN_home: 'Home',
  keyN_pageUp: 'Page Up',
  keyN_numPad_numLk: 'Num Lock',
  keyN_numPad_slash: 'NumPad /',
  keyN_numPad_asterisk: 'NumPad *',
  keyN_numPad_bar: 'NumPad -',
  keyN_tab: 'Tab',
  keyN_q: 'Q',
  keyN_w: 'W',
  keyN_e: 'E',
  keyN_r: 'R',
  keyN_t: 'T',
  keyN_y: 'Y',
  keyN_u: 'U',
  keyN_i: 'I',
  keyN_o: 'O',
  keyN_p: 'P',
  keyN_leftParenthesis: '[',
  keyN_rightParenthesis: ']',
  keyN_backSlant: '\\',
  keyN_del: 'Delete',
  keyN_end: 'End',
  keyN_pgDn: 'Page Down',
  keyN_numPad_7: 'NumPad 7',
  keyN_numPad_8: 'NumPad 8',
  keyN_numPad_9: 'NumPad 9',
  keyN_numPad_add: 'NumPad +',
  keyN_capsLock: 'CapsLock',
  keyN_a: 'A',
  keyN_s: 'S',
  keyN_d: 'D',
  keyN_f: 'F',
  keyN_g: 'G',
  keyN_h: 'H',
  keyN_j: 'J',
  keyN_k: 'K',
  keyN_l: 'L',
  keyN_semicolon: ';',
  keyN_quotationMark: "'",
  keyN_enter: 'Enter',
  keyN_numPad_4: 'NumPad 4',
  keyN_numPad_5: 'NumPad 5',
  keyN_numPad_6: 'NumPad 6',
  keyN_leftShift: 'Left Shift',
  keyN_z: 'Z',
  keyN_x: 'X',
  keyN_c: 'C',
  keyN_v: 'V',
  keyN_b: 'B',
  keyN_n: 'N',
  keyN_m: 'M',
  keyN_comma: ',',
  keyN_period: '.',
  keyN_questionMark: '/',
  keyN_rightShift: 'Right Shift',
  keyN_upArrow: '↑',
  keyN_numPad_1: 'NumPad 1',
  keyN_numPad_2: 'NumPad 2',
  keyN_numPad_3: 'NumPad 3',
  keyN_numPad_enter: 'NumPad Enter',
  keyN_leftCtrl: 'Left Ctrl',
  keyN_leftWin: 'Left Win',
  keyN_leftAlt: 'Left Alt',
  keyN_space: 'Space',
  keyN_rightAlt: 'Right Alt',
  keyN_rightWin: 'Right Win',
  keyN_menu: 'Application',
  keyN_rightCtrl: 'Right Ctrl',
  keyN_leftArrow: '←',
  keyN_downArrow: '↓',
  keyN_rightArrow: '→',
  keyN_numPad_0: 'NumPad 0',
  keyN_numPad_period: 'NumPad .'
}

exports.lang = lang
