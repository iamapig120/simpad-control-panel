//数组下标0，按键类型，1取 & 运算 0互斥，2为鼠标
//下标1为键值
//下标2为语言文件key
const data = {
  '101': [0, 0x29, 'keyN_esc'],
  '102': [0, 0x3a, 'keyN_f1'],
  '103': [0, 0x3b, 'keyN_f2'],
  '104': [0, 0x3c, 'keyN_f3'],
  '105': [0, 0x3d, 'keyN_f4'],
  '106': [0, 0x3e, 'keyN_f5'],
  '107': [0, 0x3f, 'keyN_f6'],
  '108': [0, 0x40, 'keyN_f7'],
  '109': [0, 0x41, 'keyN_f8'],
  '110': [0, 0x42, 'keyN_f9'],
  '111': [0, 0x43, 'keyN_f10'],
  '112': [0, 0x44, 'keyN_f11'],
  '113': [0, 0x45, 'keyN_f12'],
  '114': [0, 0x46, 'keyN_prtSc'],
  '115': [0, 0x47, 'keyN_scrLk'],
  '116': [0, 0x48, 'keyN_pauseBreak'],

  '201': [0, 0x35, 'keyN_waveLine'],
  '202': [0, 0x1e, 'keyN_1'],
  '203': [0, 0x1f, 'keyN_2'],
  '204': [0, 0x20, 'keyN_3'],
  '205': [0, 0x21, 'keyN_4'],
  '206': [0, 0x22, 'keyN_5'],
  '207': [0, 0x23, 'keyN_6'],
  '208': [0, 0x24, 'keyN_7'],
  '209': [0, 0x25, 'keyN_8'],
  '210': [0, 0x26, 'keyN_9'],
  '211': [0, 0x27, 'keyN_0'],
  '212': [0, 0x2d, 'keyN_bar'],
  '213': [0, 0x2e, 'keyN_equal'],
  '214': [0, 0x2a, 'keyN_bsp'],
  '215': [0, 0x49, 'keyN_ins'],
  '216': [0, 0x4a, 'keyN_home'],
  '217': [0, 0x4b, 'keyN_pageUp'],
  '218': [0, 0x53, 'keyN_numPad_numLk'],
  '219': [0, 0x54, 'keyN_numPad_slash'],
  '220': [0, 0x55, 'keyN_numPad_asterisk'],
  '221': [0, 0x56, 'keyN_numPad_bar'],

  '301': [0, 0x2b, 'keyN_tab'],
  '302': [0, 0x14, 'keyN_q'],
  '303': [0, 0x1a, 'keyN_w'],
  '304': [0, 0x08, 'keyN_e'],
  '305': [0, 0x15, 'keyN_r'],
  '306': [0, 0x17, 'keyN_t'],
  '307': [0, 0x1c, 'keyN_y'],
  '308': [0, 0x18, 'keyN_u'],
  '309': [0, 0x0c, 'keyN_i'],
  '310': [0, 0x12, 'keyN_o'],
  '311': [0, 0x13, 'keyN_p'],
  '312': [0, 0x2f, 'keyN_leftParenthesis'],
  '313': [0, 0x30, 'keyN_rightParenthesis'],
  '314': [0, 0x31, 'keyN_backSlant'],
  '315': [0, 0x4c, 'keyN_del'],
  '316': [0, 0x4d, 'keyN_end'],
  '317': [0, 0x4e, 'keyN_pgDn'],
  '318': [0, 0x5f, 'keyN_numPad_7'],
  '319': [0, 0x60, 'keyN_numPad_8'],
  '320': [0, 0x61, 'keyN_numPad_9'],
  '321': [0, 0x57, 'keyN_numPad_add'],

  '401': [0, 0x39, 'keyN_capsLock'],
  '402': [0, 0x04, 'keyN_a'],
  '403': [0, 0x16, 'keyN_s'],
  '404': [0, 0x07, 'keyN_d'],
  '405': [0, 0x09, 'keyN_f'],
  '406': [0, 0x0a, 'keyN_g'],
  '407': [0, 0x0b, 'keyN_h'],
  '408': [0, 0x0d, 'keyN_j'],
  '409': [0, 0x0e, 'keyN_k'],
  '410': [0, 0x0f, 'keyN_l'],
  '411': [0, 0x33, 'keyN_semicolon'],
  '412': [0, 0x34, 'keyN_quotationMark'],
  '413': [0, 0x28, 'keyN_enter'],
  '414': [0, 0x5c, 'keyN_numPad_4'],
  '415': [0, 0x5d, 'keyN_numPad_5'],
  '416': [0, 0x5e, 'keyN_numPad_6'],

  '501': [1, 0b00000010, 'keyN_leftShift'],
  '502': [0, 0x1d, 'keyN_z'],
  '503': [0, 0x1b, 'keyN_x'],
  '504': [0, 0x06, 'keyN_c'],
  '505': [0, 0x19, 'keyN_v'],
  '506': [0, 0x05, 'keyN_b'],
  '507': [0, 0x11, 'keyN_n'],
  '508': [0, 0x10, 'keyN_m'],
  '509': [0, 0x36, 'keyN_comma'],
  '510': [0, 0x37, 'keyN_period'],
  '511': [0, 0x38, 'keyN_questionMark'],
  '512': [1, 0b00100000, 'keyN_rightShift'],
  '513': [0, 0x52, 'keyN_upArrow'],
  '514': [0, 0x59, 'keyN_numPad_1'],
  '515': [0, 0x5a, 'keyN_numPad_2'],
  '516': [0, 0x5b, 'keyN_numPad_3'],
  '517': [0, 0x58, 'keyN_numPad_enter'],

  '601': [1, 0b00000001, 'keyN_leftCtrl'],
  '602': [1, 0b00001000, 'keyN_leftWin'],
  '603': [1, 0b00000100, 'keyN_leftAlt'],
  '604': [0, 0x2c, 'keyN_space'],
  '605': [1, 0b01000000, 'keyN_rightAlt'],
  '606': [1, 0b10000000, 'keyN_rightWin'],
  '607': [0, 0x65, 'keyN_menu'],
  '608': [1, 0b00010000, 'keyN_rightCtrl'],
  '609': [0, 0x50, 'keyN_leftArrow'],
  '610': [0, 0x51, 'keyN_downArrow'],
  '611': [0, 0x4f, 'keyN_rightArrow'],
  '612': [0, 0x62, 'keyN_numPad_0'],
  '613': [0, 0x63, 'keyN_numPad_period'],

  '701': [2, 0b00000001, 'keyN_mouseLeft'],
  '702': [2, 0b00000100, 'keyN_mouseMiddle'],
  '703': [2, 0b00000010, 'keyN_mouseRight']
}
exports.data = data
