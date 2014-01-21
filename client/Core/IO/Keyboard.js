﻿/// <reference path="Input.js" />
/// <reference path="../main.js" />

Keyboard = function (elem)
{
    this.EVENTS = {
        KEYUP: "keyup",
        KEYDOWN: "keydown",
        KEYPRESS: "keypress"
    };

    var DOMElement = elem;

    var _listeners = [];

    function objectHas(value, obj){
        for (var e in obj)
        {
            if (obj[e] == value)
            {
                return true;
            }
        }
        return false;
    }

    this.addListener = function (type, func)
    {
        if (objectHas(type, this.EVENTS))
        {
            if($.inArray(type, _listeners)){
                DOMElement.removeEventListener(type, arguments.callee, false)
            }
            DOMElement.addEventListener(type, func, false);
            _listeners.push(type);
        }
    }
}

// Static variable
Keyboard.KEYS = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pausebreak: 19,
    capslock: 20,
    escape: 27,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    leftarrow: 37,
    uparrow: 38,
    rightarrow: 39,
    downarrow: 40,
    insert: 45,
    del: 46,
    num0: 48,
    num1: 49,
    num2: 50,
    num3: 51,
    num4: 52,
    num5: 53,
    num6: 54,
    num7: 55,
    num8: 56,
    num9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftwindowkey: 91,
    rightwindowkey: 92,
    selectkey: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalpoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    equalsign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardslash: 191,
    graveaccent: 192,
    openbracket: 219,
    backslash: 220,
    closebraket: 221,
    singlequote: 222
};