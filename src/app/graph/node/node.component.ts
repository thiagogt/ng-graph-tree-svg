import { Component, Input } from '@angular/core';

@Component({
    selector: '[nodeComponent]',
    template: `
      <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <defs
      id="defs2">
     <linearGradient
        id="linearGradient34"
        inkscape:collect="always">
       <stop
          id="stop30"
          offset="0"
          style="stop-color:#d38d5f;stop-opacity:1;" />
       <stop
          id="stop32"
          offset="1"
          style="stop-color:#e9c6af;stop-opacity:1" />
     </linearGradient>
     <radialGradient
        spreadMethod="pad"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-1.7460034,1.8874592,-0.57511473,-0.53201165,1485.378,399.66501)"
        r="204.93143"
        fy="735.50281"
        fx="386.88205"
        cy="735.50281"
        cx="386.88205"
        id="radialGradient38"
        xlink:href="#linearGradient34"
        inkscape:collect="always" />
   </defs>
     <g
        transform="translate(-41.875585,-148.89097)"
        id="g209">
       <path
          inkscape:connector-curvature="0"
          id="path14"
          style="fill:#000000;stroke-width:0.999999"
          transform="scale(0.26458333)"
          d="m 389.87305,565.5 c -4.62696,0.0716 -9.29352,0.64029 -13.92188,1.23633 -4.03752,0.64524 -8.08087,1.67389 -11.65234,3.73437 -23.69472,13.67006 -16.86114,7.90072 -25.04883,14.97657 -1.96055,1.92305 -3.15266,4.34034 -4.81445,6.49414 1.3563,-0.39916 2.77362,-0.4687 4.23633,-0.30079 l 10.49218,-4.41796 c -2.9746,1.50926 -5.8998,3.105 -8.74609,4.71679 1.9354,0.41333 3.92175,1.09134 5.9082,1.77149 l 15.81055,-12.08789 v -0.002 c -1.35127,0.47887 -2.73071,0.88297 -4.05274,1.4375 -0.40484,0.16981 -0.80998,0.34999 -1.21484,0.52539 0.2423,-0.28272 0.48427,-0.56493 0.72656,-0.84765 0.28314,-0.37586 0.54466,-0.76861 0.8125,-1.15625 9.43238,-1.48487 18.93607,-2.41602 28.06641,1.24804 7.35685,2.39698 14.70641,4.82259 21.88086,7.73438 3.51284,1.42571 10.44073,4.38362 13.95898,6.54102 0.89677,0.54988 1.60019,1.36605 2.40039,2.04882 0.26701,0.33628 0.52011,0.68265 0.78125,1.02344 0.22779,0.0218 0.45584,0.0403 0.6836,0.0625 3.07038,0.29896 6.13234,0.67556 9.18945,1.09375 1.13108,-0.77685 3.89639,-0.0375 6.58398,0.97266 0.83006,0.12632 1.66267,0.23848 2.49219,0.36719 2.58637,0.40127 6.96981,-0.92319 7.6875,1.59374 0.14293,0.50125 0.23823,1.0072 0.3125,1.51368 0.2976,-0.20088 0.60072,-0.39488 0.91602,-0.57032 2.30699,-1.28362 4.9171,-0.86769 7.60547,-0.0586 -5.39018,-5.86348 -9.38869,-12.78175 -14.05469,-19.18945 -0.90943,-0.81808 -1.67709,-1.82991 -2.72852,-2.45508 -3.18017,-1.89086 -12.15871,-5.45196 -15.24609,-6.67774 -7.14694,-2.83744 -14.37189,-5.47938 -21.58984,-8.1289 -5.64324,-2.5609 -11.52567,-3.29132 -17.47461,-3.19922 z m -41.99219,19.10938 c -1.24579,0.716 -2.40035,1.38463 -3.76563,2.1621 -0.69546,0.39606 1.3453,-0.87201 2.04102,-1.26757 0.56664,-0.32219 1.14487,-0.60934 1.72461,-0.89453 z m -18.37305,13.52148 c -0.35578,0.20185 -0.8885,0.50665 -1.22461,0.69726 0.0867,1.62631 0.1392,3.25764 0.1875,4.88868 0.27097,-0.16207 0.45386,-0.27535 0.72852,-0.43946 0.0318,-1.76856 0.0615,-3.53998 0.30859,-5.14648 z m -3.57226,2.03125 c -0.12542,0.0711 -0.38733,0.22159 -0.50977,0.29101 0.36079,1.48577 0.70479,2.97553 1.0586,4.4629 0.2336,-0.14369 0.56795,-0.34358 0.8496,-0.51368 -0.54224,-1.3525 -0.9897,-2.78128 -1.39843,-4.24023 z m -6.98633,9.99023 c -0.0208,0.002 -0.0417,0.004 -0.0625,0.006 -3.99862,0.44851 -8.00174,0.9803 -12.00977,1.49805 -1.3315,0.8606 -2.14723,1.383 -3.98633,2.57031 -13.45121,9.56909 -26.51736,19.66672 -39.77929,29.4961 -3.48201,2.46044 -6.97917,4.9001 -10.51367,7.28515 -12.88042,3.65507 -26.33216,3.4874 -39.59766,4.56641 -0.61653,2.75204 -1.46459,5.42364 -2.74023,7.93359 -1.03816,2.04269 -2.27615,3.95476 -3.63282,5.78907 8.92131,-0.5557 17.8546,-1.00246 26.6543,-2.68555 18.26396,-9.94137 36.5884,-19.43787 53.12305,-32.13867 10.87231,-8.07324 21.53831,-16.43166 32.54492,-24.32032 z m 121.88672,9.75782 c 3.89297,3.85653 7.82921,7.76562 12.24414,11.0039 5.50019,4.03438 11.78242,6.19469 18.07031,8.67383 3.66917,1.50391 11.98236,4.90098 15.62695,6.43555 7.02777,2.95914 14.00079,6.30497 21.68555,7.13476 12.81052,2.46788 25.91681,4.79203 37.86133,10.21289 14.36629,6.87591 28.40379,14.42308 41.93359,22.83789 0.0751,0.0541 0.15306,0.10457 0.22852,0.15821 -5.40632,-9.87068 -10.31118,-18.76037 -12.10547,-22.03711 -4.21823,-7.1006 -7.71335,-11.91499 -10.38477,-15.7832 -0.71393,-0.37888 -1.43353,-0.74538 -2.18554,-1.03711 -4.39325,-1.70427 -9.8391,-2.96017 -14.33008,-4.06836 -6.72299,-1.65899 -13.4764,-3.19679 -20.22656,-4.74024 -12.0455,-2.23532 -23.36673,-7.06925 -34.63868,-11.74805 -9.3874,-0.23256 -18.74362,-1.0173 -28.11914,-2.0996 -5.35922,-0.61868 -12.2412,1.55193 -16.02148,-2.29688 -0.24205,-0.24644 -0.45211,-0.46781 -0.6875,-0.70898 -0.45894,-0.0148 -1.01949,0.0488 -1.62109,0.14257 -0.2501,0.19371 -0.58932,0.23055 -0.99219,0.15625 -1.83048,0.31137 -3.60798,0.58031 -3.3418,-0.70312 0.0452,-0.2177 0.10729,-0.44238 0.15625,-0.66211 -0.67219,-0.32034 -1.32403,-0.59251 -1.88086,-0.67969 -0.42334,-0.0663 -0.84802,-0.12555 -1.27148,-0.1914 z m -192.31836,33.79296 c -2.84363,1.85467 -5.70938,3.67311 -8.63672,5.39649 -1.33893,0.78826 -5.37075,3.13094 -4.04883,2.31445 4.20974,-2.60012 8.44918,-5.15428 12.68555,-7.71094 z m 348.76758,12.14649 c 6.33633,11.48697 15.77275,28.66314 22.75976,41.98437 0.59148,-5.6726 1.04253,-11.35466 1.13867,-17.05078 -0.1508,-4.02965 -2.51789,-11.73275 -5.84179,-14.35351 -1.82548,-1.43936 -3.90665,-2.5219 -5.85938,-3.78321 -4.07277,-2.25384 -8.13329,-4.52786 -12.19726,-6.79687 z m -413.07032,0.53906 c -7.74013,4.23588 -12.54873,7.44282 -17.57812,16.47266 -1.48532,3.16492 -2.32211,6.47288 -2.83203,9.84375 2.5777,-3.24875 5.95624,-7.38051 13.99023,-17.30078 0.22152,-0.27354 0.43527,-0.55554 0.65235,-0.83399 -0.28263,0.14783 -0.56175,0.30202 -0.84571,0.44727 -0.76617,0.39192 0.1793,-0.31831 1.34766,-1.08985 1.83789,-2.42044 3.53953,-4.99339 5.26562,-7.53906 z m 1.45899,27.21875 c -10.05367,12.3935 -10.52233,12.96667 -17.46485,22.59766 0.0288,0.37947 0.0365,0.75153 0.0469,1.125 1.52242,3.23335 2.33172,6.13939 -0.41602,5.1543 -0.8016,4.24251 -2.6421,8.14043 -4.7539,11.93164 0.27793,3.61202 0.62577,5.56166 1.24414,9.69921 1.12167,10.44651 6.22205,19.63349 11.70312,28.38086 3.58025,5.46358 7.79986,10.47597 11.79492,15.63672 2.49404,3.72783 4.57492,7.7365 5.66016,12.09766 0.92441,5.48481 0.84077,10.99701 0.2168,16.49414 -0.60656,5.77519 -1.85401,11.4457 -2.44727,17.2207 -0.46242,5.60183 -0.49505,11.19315 -1.09179,16.78711 -0.77235,6.68164 -0.94125,13.41314 -1.20508,20.12891 -1.22553,12.23558 -0.85225,24.33849 1.08203,36.46484 0.49885,2.21099 1.73984,8.22509 2.67187,10.43555 3.57437,8.47725 12.48289,16.99322 18.85938,23.59961 5.06449,4.97344 9.877,10.60455 16.66016,13.29883 3.61878,1.43739 7.1721,1.97913 10.95703,2.74218 14.31556,1.59009 28.82251,1.49233 43.15429,0.17774 12.12463,-1.51435 23.8617,-5.1142 34.95508,-10.16406 6.94665,-3.35622 13.92896,-6.62411 20.78711,-10.16016 2.17774,-1.29837 4.42871,-2.43759 6.72266,-3.48438 1.83623,-3.00464 3.64146,-5.70812 6.02343,-8.87109 -4.53237,2.26162 -9.10968,4.42859 -13.65234,6.67578 -10.90513,5.42215 -22.54489,9.21516 -34.62109,10.98828 -14.10175,1.69743 -28.44943,1.85271 -42.57617,0.31055 -3.5169,-0.60503 -7.04985,-1.05692 -10.43946,-2.25 -6.67623,-2.34992 -11.584,-7.63422 -16.6582,-12.29102 -5.37956,-5.41727 -11.09068,-10.931 -15.21094,-17.42578 -2.97677,-4.69228 -4.11546,-10.08631 -5.30859,-15.41601 -0.92447,-5.56498 -1.23801,-6.55688 -1.55664,-12.33789 -0.43703,-7.92915 0.46765,-15.83507 0.96484,-23.73828 0.57307,-6.71895 0.70081,-13.46683 1.50586,-20.16797 0.53934,-5.59087 0.65512,-11.19751 1.1582,-16.79102 0.69979,-5.7679 1.78561,-11.4786 2.46094,-17.24805 0.55923,-5.79669 0.2263,-11.62215 -0.55469,-17.39062 -1.32778,-4.65502 -3.66856,-8.90852 -6.23437,-12.99805 -4.0932,-5.0002 -8.41032,-9.83882 -11.98438,-15.24219 -5.65703,-8.28974 -10.15715,-17.20493 -11.36914,-27.30859 -1.77336,-12.00975 -1.82208,-24.11095 -1.21484,-36.22656 0.0384,-0.80769 0.0906,-1.62356 0.13086,-2.43555 z m -17.83399,28.87696 c 0.31375,-1.66055 0.46537,-3.3744 0.41602,-5.1543 -0.11118,-0.23612 -0.22616,-0.47288 -0.34375,-0.71094 -1.03786,1.43963 -1.61861,2.24455 -3.04102,4.21094 1.28021,0.87501 2.24125,1.39346 2.96875,1.6543 z m 430.49805,-18.00196 c -0.088,12.14408 -1.56105,24.2789 -3.51562,36.2461 -1.98607,9.03121 -3.37444,15.76557 -10.34571,22.22656 -2.41504,2.21926 -2.54264,2.49424 -5.25781,4.35547 -0.96714,0.66296 -3.99734,2.45194 -2.97656,1.875 0.57041,-0.32239 1.51509,-0.87107 2.17383,-1.2461 -3.41987,1.97926 -4.2511,2.4557 -8.9961,5.20508 -1.42212,0.82401 -2.82422,1.6823 -4.23633,2.52344 -11.9271,7.22994 -24.4708,14.20191 -33.79492,24.70898 1.86121,0.22942 3.72146,0.46474 5.58399,0.6836 2.79431,0.32832 7.15712,-1.68507 8.39843,0.83984 h 0.15235 c 1.75828,-2.52852 3.51417,-4.83263 5.86914,-8.00586 7.406,-8.96035 17.12951,-15.35285 27.07812,-21.27734 10.46039,-5.69933 21.57545,-10.76822 29.79297,-19.5 4.22567,-4.25749 6.11723,-8.49538 7.30664,-13.27344 -1.19823,-3.15325 -2.47152,-6.27625 -3.84375,-9.35547 -2.21151,-4.96253 -7.51959,-15.08851 -13.38867,-26.00586 z m -67.92773,126.74219 c -1.78378,0.0652 -3.56908,0.10413 -5.35743,0.11328 -0.68873,0.3557 -1.38024,0.70644 -2.08007,1.0332 -4.53487,-0.24449 -4.99779,4.72664 -7.9668,6.39258 -2.41213,1.35348 -4.88018,2.55674 -7.38477,3.66211 -1.16565,2.90514 -2.29574,5.8219 -3.40625,8.73828 -4.20608,12.71418 -8.15168,25.53811 -13.26757,37.92774 -4.21925,8.84773 -9.37796,17.25981 -16.31836,24.18945 -0.5483,-0.0109 -1.10795,-0.0293 -1.82618,-0.0566 -1.55716,-0.0593 -3.10811,-0.23005 -4.66211,-0.3457 -9.7655,-0.8518 -19.49055,-2.0596 -29.24218,-3.05079 -13.22287,-1.04624 -26.49883,-1.26359 -39.75586,-0.81054 -1.62093,0.0707 -6.8904,0.25032 -8.73242,0.50586 -1.07951,0.14974 -2.14876,0.36482 -3.21289,0.61328 -4.51795,4.83822 -9.17041,9.55775 -13.51563,14.54883 1.63606,-0.22286 3.28041,-0.41154 4.93555,-0.55274 13.25265,-0.80368 26.53025,-0.74055 39.75976,0.35547 9.65515,1.33962 19.36235,2.20373 29.0625,3.14453 1.51548,0.14022 6.88691,0.70793 8.59571,0.60547 2.95729,-0.17726 6.09091,-0.97584 8.68359,-2.4375 24.92073,-14.04922 18.86456,-9.27769 30.14648,-18.91601 8.48228,-7.86849 14.36782,-17.84863 19.10157,-28.28711 4.99079,-12.43068 8.63259,-25.3287 12.81445,-38.03907 1.16443,-3.12124 2.37779,-6.23413 3.62891,-9.33398 z" />
       <path
          inkscape:connector-curvature="0"
          id="path20"
          style="fill:url(#radialGradient38);fill-opacity:1;stroke-width:1.75855"
          transform="scale(0.26458333)"
          d="m 371.46094,580.96094 c -5.89164,0.14745 -10.33057,2.81824 -17.63477,8.34765 -2.01587,1.52606 -4.28747,3.14417 -6.58008,4.71485 1.98896,0.67112 3.96778,1.29007 5.88282,1.55664 6.47434,0.90123 12.95319,1.77036 19.43359,2.62695 1.95045,0.24584 3.9011,0.49245 5.85156,0.73828 0.30378,-0.33795 0.63581,-0.65835 1.03125,-0.9375 5.85116,-4.13057 14.32835,0.0841 21.48242,0.42578 7.22744,0.34512 14.45079,0.83348 21.65821,1.47852 -5.62154,-4.96884 -13.02228,-8.15451 -29.16602,-13.67773 -10.42962,-3.5683 -16.76048,-5.40355 -21.95898,-5.27344 z m 9.16211,18.14844 c -0.0732,0.0117 -0.13198,0.0449 -0.18164,0.0918 0.54421,0.0686 1.08859,0.13649 1.63281,0.20508 -0.43061,-0.0193 -1.07382,-0.35733 -1.45117,-0.29687 z m -51.47461,6.0332 c -0.19152,0.12354 -0.41915,0.2756 -0.61719,0.4043 0.0162,0.48244 0.0288,0.96525 0.0488,1.44726 0.13089,0.21741 0.25819,0.43813 0.40039,0.64648 0.0947,-0.80409 0.13786,-1.64521 0.16797,-2.49804 z m -0.16797,2.49804 c -0.071,0.60336 -0.15994,1.19339 -0.29297,1.75 -0.0523,-0.79648 -0.0743,-1.59762 -0.10742,-2.39648 -0.21163,-0.35151 -0.40621,-0.71757 -0.5918,-1.08984 -0.3628,0.2372 -0.71764,0.46818 -1.09961,0.7207 0.21246,0.9053 0.43574,1.80827 0.64258,2.71484 0.0153,0.0677 -0.13438,-0.0544 -0.20313,-0.0469 -1.73526,0.16441 -3.46781,0.35271 -5.20117,0.5332 -6.14902,4.20259 -13.60308,9.50446 -20.82226,14.85742 -25.90855,19.21097 -49.30275,34.07925 -63.41602,40.30469 -5.11324,2.25548 -14.47916,3.93918 -27.14648,4.88281 l -4.82031,0.35938 c -4.4174,5.71352 -9.96647,10.68709 -14.52344,16.31641 -1.83798,2.27044 -2.75905,3.40424 -4.18946,5.16796 -1.01085,14.99169 -0.56008,36.75524 1.49414,45.31836 2.02134,8.42585 7.3096,17.52396 21.78321,37.47071 6.97444,9.61183 9.11926,21.55683 6.58594,36.67968 -0.89716,5.35566 -2.61232,23.69996 -3.81055,40.76563 -3.23209,46.03298 -0.82216,54.90398 20.3789,75.04297 9.87479,9.38008 14.66284,12.63901 20.49024,13.9414 11.98109,2.67768 39.00883,2.33677 53.8418,-0.67968 8.91055,-1.81205 22.2902,-6.89595 39.05273,-14.83789 1.75176,-0.82997 3.53009,-1.65971 5.3125,-2.48047 1.91517,-2.45057 4.1735,-5.20932 7.16797,-8.72657 5.35189,-6.28622 11.23417,-12.10027 16.85156,-18.15039 19.11133,-17.546 19.46139,-18.79966 39.5918,-33.83398 0.51628,-0.38559 0.85389,-0.62909 1.33398,-0.98633 -0.0705,-0.0556 -0.11237,-0.0802 -0.18554,-0.13867 -4.23096,-3.3809 -9.3845,-5.85504 -12.69336,-10.14258 -0.90871,-1.17747 0.92674,-2.84949 1.67187,-4.13672 0.67638,-1.16841 1.35704,-2.15372 2.05664,-3.05859 -0.84818,-1.36839 -0.89258,-1.79126 0.47071,-0.59375 1.63538,-1.99844 3.41045,-3.61723 5.58789,-5.83008 0.86206,-0.78685 2.52618,-2.37283 4.44531,-4.02734 -0.12485,-0.46789 -0.20713,-0.80109 -0.3418,-1.29688 -0.28838,-1.06178 1.83357,-1.21932 2.7461,-1.83398 2.22345,-1.49772 19.35047,-13.06881 20.11718,-13.61328 2.87834,-2.04416 5.63665,-4.25097 8.45508,-6.37696 1.8195,-1.18945 3.61163,-2.42267 5.45899,-3.56836 0.43139,-0.26755 0.93695,-0.93209 1.36914,-0.66601 0.36929,0.22749 -0.4755,0.76639 -0.50196,1.19922 -0.0103,0.15911 0.35095,-0.32716 0.4375,-0.19336 1.97023,3.03689 3.19602,6.57533 5.50977,9.35937 0.34192,0.41098 0.96086,0.21801 1.55859,0.0723 -0.008,-0.0235 -0.0179,-0.0421 -0.0234,-0.0684 -0.53566,-2.54496 -0.63914,-5.13977 -0.60743,-7.75 -0.5872,-3.24981 -1.06958,-6.50288 -0.85156,-9.77539 0.0743,-1.11613 2.2289,-0.18815 3.34375,-0.27735 2.55175,-0.2039 17.23756,-1.36153 18.88086,-1.44921 1.17388,-0.0627 3.19884,-1.08831 3.52539,0.041 1.46971,5.08449 0.71151,10.56108 1.06641,15.8418 0.97326,-5.85921 -0.0812,-12.45146 2.91797,-17.57813 0.29061,-0.49676 0.72195,-0.70869 1.24023,-0.74218 1.55485,-0.1005 3.89841,1.40257 5.61133,1.61914 5.82066,0.73579 11.64128,1.46898 17.46289,2.19726 4.86536,0.60866 9.72967,1.22742 14.5957,1.83008 8.48777,-9.28479 19.1397,-16.78 34.48047,-25.80859 8.22125,-4.83849 17.16508,-11.12444 19.87695,-13.96875 6.65804,-6.98319 9.97209,-20.14844 11.16211,-44.34766 0.33286,-6.76857 0.55706,-11.55002 0.2793,-15.25 -2.29783,-4.25372 -4.39969,-8.10188 -6.64648,-12.21094 -2.78253,-2.09684 -6.60407,-4.32967 -11.91407,-7.41601 -24.36231,-14.16018 -37.72995,-19.82871 -57.28125,-24.29102 -10.81604,-2.46861 -29.89526,-8.56454 -42.39843,-13.54687 -18.55065,-7.39218 -29.05656,-13.53077 -38.79688,-23.75 -4.80328,-0.73771 -9.61395,-1.43799 -14.44922,-1.91211 -8.15217,-0.79937 -16.33276,-1.28418 -24.50976,-1.76758 -5.80867,-0.34339 -12.91009,2.89737 -17.49024,-0.58984 0.0373,0.4293 0.0877,0.85722 0.10547,1.28906 0.0432,1.05074 -2.10259,0.23064 -3.15039,0.14258 -3.2368,-0.27171 -6.44782,-0.79299 -9.66797,-1.21875 -0.23768,-0.0314 -38.40779,-5.13073 -38.82031,-5.44141 -0.96211,-0.72423 -1.74724,-1.58693 -2.40625,-2.55274 z m 79.62305,235.52735 c -0.15827,0.1934 -0.31488,0.3922 -0.47071,0.59375 1.98444,3.20153 8.29189,11.49812 11.03125,16.08398 2.68159,-1.98167 4.99368,-3.66765 6.86719,-4.9707 -0.37499,-0.96715 -0.76413,-2.11174 -1.16406,-3.36328 -1.68408,1.66654 -2.55638,2.47563 -3.59766,4.12305 0.0214,0.0254 0.0451,0.0488 0.0664,0.0742 0.31256,0.37229 -1.08952,1.60783 -0.84571,1.1875 0.31916,-0.55014 0.5358,-0.87647 0.7793,-1.26171 -3.29353,-3.90541 -7.26175,-7.18847 -10.89062,-10.78516 -0.75613,-0.74942 -1.33531,-1.29507 -1.77539,-1.68164 z m 76.31054,-28.52344 c -3.28966,0.23875 -6.5787,0.49564 -9.86718,0.75 -1.1916,0.0921 -2.38274,0.18777 -3.57422,0.28125 -0.23019,0.3435 -0.47443,0.68112 -0.75,1.00391 -2.95336,3.45932 -7.6555,5.63651 -11.38672,8.16211 -2.36116,1.88186 -4.78381,3.67908 -7.22852,5.44726 0.3253,-0.0342 0.65251,-0.0504 0.98438,-0.0215 0.77528,-0.72286 1.96619,-1.26704 3.68359,-1.56446 1.08356,-0.18764 -1.11832,0.9923 -2.48633,1.82422 0.0928,0.0277 0.18594,0.0555 0.27735,0.0859 1.05372,-0.77017 3.40752,-1.36045 7.0625,-2.89648 2.34474,-1.14626 5.18054,-5.27582 7.03515,-3.43946 2.16268,2.14142 0.73985,9.06421 0.91016,11.82813 0.56799,-0.15798 1.6573,-0.46885 2.3125,-0.65235 1.46399,-3.43992 -1.8976,-8.87513 -1.17969,-12.98242 0.20153,-1.15283 1.93604,-1.33637 2.99805,-1.82812 4.56857,-2.11536 9.95957,-3.5312 14.72461,-4.94922 -0.0104,-0.24023 -0.0106,-0.46111 -0.006,-0.67188 -1.19639,-0.17227 -2.45754,-0.45336 -3.50977,-0.37695 z m -1.80078,8.48438 c -0.20853,0.0151 -0.47494,0.13461 -0.80859,0.37695 -1.59647,4.48206 -2.4644,7.59485 -3.03711,9.86523 0.30103,-0.0856 0.40529,-0.11248 0.7168,-0.20117 0.67876,-0.19326 1.35198,-0.40536 2.02929,-0.60351 1.13332,-4.34597 2.58328,-9.54482 1.09961,-9.4375 z m 23.64258,19.68359 c -12.53431,5.38752 -26.04637,8.14091 -39.15234,11.875 -4.14475,1.18091 -8.23542,2.54194 -12.35352,3.8125 -1.60573,0.51912 -3.25265,0.92705 -4.81836,1.55664 -0.11187,0.0457 0.14216,0.29947 0.0391,0.36524 -2.88166,1.83802 -5.96819,3.3469 -8.8164,5.23632 -5.30045,3.51614 -10.52544,7.15147 -15.61328,10.96875 -19.47735,14.61324 -19.31791,15.36373 -37.77735,32.375 -0.11626,0.12581 -0.23506,0.2494 -0.35156,0.375 13.59382,-2.0857 37.68312,-1.82809 64.34375,0.83008 l 21.69922,2.16406 4.25586,-5.05859 c 7.68315,-9.13089 12.51606,-19.33344 21.82422,-46.07617 2.35845,-6.77596 4.57042,-12.87225 6.7207,-18.42383 z" />
       <path
          style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="m 54.438261,229.85043 c 0.752446,3.0917 -1.001297,17.53935 0,19.54194 0.06936,0.13872 0.465283,0.15509 0.465283,0 0,-0.1551 -0.562171,-0.12111 -0.465283,0 0.685093,0.85637 1.483923,1.62434 2.32642,2.32642 0.60932,0.50777 5.17847,0 5.583412,0 0.31019,0 0.653127,0.13872 0.930569,0 2.564492,-1.28225 -5.910863,0.21541 3.256989,-0.93057 0.836909,-0.10461 19.558164,0.32483 20.007223,0 1.617704,-1.17018 3.125501,-2.48524 4.688255,-3.72786"
          id="path140"
          inkscape:connector-curvature="0" />
       <path
          style="fill:#c87137;stroke-width:0.264583"
          id="path142"
          d="m 51.830739,228.13907 c 0.0486,1.48273 0.01466,2.96632 0.02992,4.44961 0.02368,0.29727 0.02924,0.59653 0.07101,0.8918 0.123462,0.87278 0.322857,1.73315 0.476366,2.60115 0.20224,1.14354 0.372896,2.28749 0.611976,3.42394 0.454001,1.8015 1.194514,3.52206 1.877653,5.2473 0.749278,1.76165 2.298771,2.9946 3.755876,4.16409 1.138233,0.95142 2.482792,1.53484 3.854543,2.05753 1.471657,0.52207 2.997279,0.86887 4.528725,1.16153 1.530024,0.24678 3.093114,0.18647 4.638352,0.19706 1.999432,0.004 3.998809,-0.0102 5.998236,-0.0124 2.298663,0.0527 4.591032,-0.0584 6.884247,-0.19901 0.340709,-0.0217 0.681416,-0.0434 1.022122,-0.0651 0,0 5.465741,-4.02777 5.465741,-4.02777 v 0 c -0.345622,0.0247 -0.691247,0.0495 -1.03687,0.0742 -2.279793,0.17811 -4.55835,0.28858 -6.846001,0.2285 -1.99195,0.003 -3.983903,-8e-4 -5.975847,5.3e-4 -1.508265,-0.001 -3.023831,0.0167 -4.525449,-0.14135 -1.52367,-0.22 -3.027826,-0.54187 -4.489763,-1.03144 -1.322218,-0.47522 -2.611844,-1.05158 -3.760882,-1.87081 -1.414116,-1.05606 -2.826393,-2.22277 -3.552471,-3.87596 -0.733774,-1.66524 -1.378556,-3.3659 -1.849183,-5.12608 -0.528778,-2.22795 -0.930688,-4.51186 -1.062604,-6.79839 0.01519,-1.49346 -0.01842,-2.98719 0.02992,-4.4801 0,0 -6.14561,3.13135 -6.14561,3.13135 z"
          inkscape:connector-curvature="0">
         <path
            style="fill:#c87137;stroke-width:0.264583"
            id="path144"
            d="m 49.356713,182.93022 c -0.434393,1.68008 -0.928896,3.34338 -1.402162,5.01263 -0.424407,1.32507 -1.005525,2.59448 -1.124328,3.989 0.0158,0.83146 -0.199962,1.68779 -0.117308,2.51957 0.05068,0.51004 0.268377,1.31685 0.385362,1.7958 0.354502,2.0616 1.361901,3.83628 2.353279,5.64329 0.871482,1.41864 1.744316,2.83612 2.610498,4.25815 0.529569,0.78521 1.072385,1.54023 1.398582,2.43412 0.207963,0.55122 0.215934,1.13933 0.234664,1.71969 0.03372,1.24238 0.03139,2.48606 0.01368,3.72875 0.01609,0.95142 -0.02302,1.90235 -0.02566,2.85364 -0.01066,0.55678 -0.0024,1.11365 -0.0059,1.67045 0.0028,0.74451 -0.01762,0.19006 0.276587,1.64133 0,0 5.955139,-3.12594 5.955139,-3.12594 v 0 c -0.06245,-1.47241 -0.06014,-0.91829 -0.0574,-1.6614 -0.0036,-0.5547 0.0047,-1.10944 -0.0053,-1.66412 -0.0011,-0.9436 -0.03691,-1.88699 -0.01614,-2.83067 -0.01064,-1.25595 0.0031,-2.51205 0.01791,-3.76793 -0.01439,-0.65573 -0.10105,-1.31296 -0.357621,-1.92248 -0.376341,-0.92206 -0.905285,-1.7317 -1.493624,-2.53332 -0.904613,-1.38299 -1.779238,-2.78462 -2.69672,-4.159 -0.954786,-1.75158 -1.810607,-3.53291 -2.209887,-5.50387 -0.270809,-1.37333 -0.303422,-2.73867 -0.106424,-4.1289 0.248555,-1.32436 0.734383,-2.58508 1.115685,-3.87507 0.485907,-1.69255 0.978191,-3.3833 1.475258,-5.0725 0,0 -6.218195,2.97878 -6.218195,2.97878 z"
            inkscape:connector-curvature="0" />
       </path>
       <path
          style="fill:#c87137;stroke-width:0.264583"
          id="path146"
          d="m 55.965997,180.58263 c 1.404921,-0.68126 2.823903,-1.33337 4.256286,-1.95476 0.884343,-0.36825 1.765779,-0.74359 2.679938,-1.03173 1.195602,-0.48555 2.444967,-0.81788 3.669022,-1.22071 4.133903,-1.19979 5.871406,-2.56733 10.220745,-5.06408 1.358985,-0.63796 2.136336,-1.5703 3.0743,-2.70417 0.838935,-0.7134 1.35459,-1.66746 2.05681,-2.49119 0.593577,-0.61615 0.98553,-1.34555 1.552673,-1.99339 0.510183,-0.69312 1.069205,-1.35271 1.631095,-2.00829 0,0 -6.320642,2.67843 -6.320642,2.67843 v 0 c -0.5618,0.6672 -1.120296,1.33689 -1.654331,2.02662 -0.524833,0.66544 -0.968272,1.38724 -1.553535,2.0056 -0.638649,0.84274 -1.251162,1.69749 -2.009272,2.44366 -0.92669,1.02133 -1.909437,1.89945 -3.166708,2.49931 10.054812,-5.7472 5.991598,-3.15671 3.852656,-2.33247 -0.742289,0.28605 -1.517613,0.45421 -2.270789,0.70609 -1.180812,0.48715 -2.434855,0.78147 -3.648139,1.17559 -0.861713,0.44062 -1.869911,0.59124 -2.726933,1.06293 -1.445543,0.57568 -2.846332,1.26592 -4.252296,1.93037 0,0 -5.39088,4.27219 -5.39088,4.27219 z"
          inkscape:connector-curvature="0" />
       <path
          style="fill:#c87137;stroke-width:0.264583"
          id="path148"
          d="m 56.947892,180.10425 c 1.905058,-0.76563 3.807322,-1.53482 5.687753,-2.35913 0.486185,-0.22023 0.81031,-0.35443 1.281517,-0.62339 2.159262,-1.23246 4.295236,-2.50568 6.462081,-3.72476 1.783778,-1.00357 -7.066733,4.13304 -5.312805,3.07817 7.445873,-4.47816 4.290198,-2.19226 6.867099,-4.08178 0.750869,-0.62782 1.622523,-1.06074 2.427272,-1.60873 1.091581,-0.57853 2.099183,-1.29035 3.106676,-2.00027 1.259433,-1.02226 2.572719,-1.99673 3.722312,-3.14549 0.754626,-0.92592 1.446578,-1.87465 2.31693,-2.70291 0.484854,-0.44045 0.951894,-0.90004 1.424286,-1.35371 0,0 -6.324465,2.60183 -6.324465,2.60183 v 0 c -0.485957,0.45952 -0.980003,0.91096 -1.450885,1.38607 -0.806394,0.86375 -1.466376,1.8475 -2.308524,2.67736 -1.189577,1.07411 -2.429173,2.09476 -3.728786,3.03347 -1.035473,0.70288 -2.096703,1.36234 -3.170269,2.0053 -0.819028,0.51219 -1.633664,1.02426 -2.397032,1.61972 -0.18284,0.12121 -0.739669,0.47125 -0.548521,0.36362 1.810509,-1.01948 7.210025,-4.13424 5.407964,-3.09991 -20.861922,11.97415 4.676116,-2.62958 -2.412693,1.33174 -1.872152,0.81409 -3.722899,1.67589 -5.65037,2.35681 0,0 -5.39954,4.24599 -5.39954,4.24599 z"
          inkscape:connector-curvature="0" />
       <path
          style="fill:#c87137;stroke-width:0.264583"
          id="path150"
          d="m 82.388429,167.15866 c 1.664168,-0.38971 3.335525,-0.74972 5.013195,-1.07656 1.140076,-0.24294 2.307008,-0.25947 3.467261,-0.27769 1.600944,-0.0524 3.203083,-0.0377 4.804307,-0.008 1.34838,-0.003 2.696511,-0.0143 4.045003,0.004 1.704155,-0.0187 3.408065,-0.0254 5.112365,-0.0137 2.02388,-0.0265 4.03026,0.28264 6.02733,0.57423 1.58663,0.25538 3.18445,0.44138 4.76427,0.73648 0.42434,0.16827 0.84868,0.33654 1.27302,0.5048 0,0 5.6051,-3.70882 5.6051,-3.70882 v 0 c -0.42343,-0.22848 -0.84687,-0.45697 -1.27031,-0.68546 -1.57282,-0.40545 -3.21512,-0.49393 -4.81447,-0.77272 -2.01567,-0.24708 -4.03255,-0.62483 -6.06282,-0.66058 -1.69139,0.0114 -3.38237,0.006 -5.0736,-0.0142 -1.34774,0.0165 -2.69505,0.006 -4.04267,-0.004 -1.599598,0.0202 -3.199542,0.0279 -4.798951,-0.0112 -1.186793,0.0192 -2.389896,0.0177 -3.562289,0.1986 -1.674328,0.32027 -3.325484,0.76076 -5.009628,1.02692 0,0 -5.477113,4.18812 -5.477113,4.18812 z"
          inkscape:connector-curvature="0" />
       <path
          style="fill:#c87137;stroke-width:0.264583"
          id="path152"
          d="m 88.643128,157.93643 c 1.369775,0.55695 2.762681,1.05613 4.18605,1.45738 1.210543,0.26993 2.450039,0.33691 3.668133,0.56748 1.102598,0.29201 2.213607,0.51682 3.347876,0.63685 0.809623,0.10031 1.622603,0.0976 2.436433,0.0898 0.21247,-0.001 0.42493,-0.002 0.6374,-0.003 0,0 5.55191,-4.0343 5.55191,-4.0343 v 0 c -0.2094,-7.9e-4 -0.4188,-0.001 -0.6282,-0.002 -0.79782,-0.01 -1.59623,-0.007 -2.39322,-0.0482 -1.12485,-0.0764 -2.23502,-0.23759 -3.32148,-0.54923 -1.20207,-0.29187 -2.420969,-0.39651 -3.644709,-0.55241 -1.397937,-0.32191 -2.756712,-0.77465 -4.067143,-1.36066 0,0 -5.77305,3.79846 -5.77305,3.79846 z"
          inkscape:connector-curvature="0" />
       <path
          style="fill:#c87137;stroke-width:0.264583"
          id="path154"
          d="m 94.775736,241.71682 c 1.29849,-1.22872 2.680401,-2.36644 3.987773,-3.58372 1.082784,-0.95275 2.043001,-1.98274 2.968471,-3.08678 0.87022,-1.02257 1.77055,-2.01216 2.46598,-3.16538 0.54719,-0.9695 1.14008,-1.89427 1.827,-2.77181 0.44741,-0.87347 1.05631,-1.61378 1.7277,-2.32231 0.59316,-0.71707 1.35329,-1.24557 1.99236,-1.90899 0.44474,-0.50022 0.93927,-0.94952 1.32918,-1.49442 0.68985,-0.73404 1.49452,-1.36033 2.11954,-2.15168 0.48429,-0.52152 0.93917,-1.0451 1.39357,-1.60229 0.67296,-0.79768 1.41204,-1.53623 2.14034,-2.28274 0.81239,-0.90761 1.80078,-1.61852 2.72133,-2.40808 -1.39284,0.72703 2.76511,-1.66585 1.44561,-0.90958 -12.30483,7.05243 -6.03233,3.50372 -4.50917,2.62476 2.16176,-1.24748 4.32276,-2.49629 6.48413,-3.74444 -10.67479,5.76603 -3.89603,2.28326 -1.26306,1.21211 1.37513,-0.56742 2.82998,-0.75384 4.30194,-0.83559 1.42136,-0.046 2.84356,-0.0582 4.26558,-0.056 1.01599,0.003 2.0317,0.0321 3.04758,0.0427 0.99869,-0.0146 1.9977,-0.0147 2.99665,-0.0107 0.8974,-0.007 0.41424,-0.0382 1.44651,0.1325 0,0 5.61421,-3.86527 5.61421,-3.86527 v 0 c -1.07843,-0.37417 -0.57473,-0.30573 -1.49259,-0.3127 -0.98716,0.004 -1.97435,0.005 -2.96123,-0.0129 -1.04612,0.006 -2.0922,0.0254 -3.13838,0.0233 -1.42075,-0.005 -2.84232,-0.0569 -4.26229,0.009 -1.50955,0.0686 -3.01467,0.1301 -4.4484,0.66757 -3.70556,1.41718 -7.15469,3.27647 -10.49578,5.46025 7.64633,-4.41085 6.66105,-3.84438 4.52496,-2.6095 -2.53489,1.46543 -5.51906,2.87354 -7.92524,4.76088 -0.93299,0.77842 -1.86821,1.55255 -2.68085,2.46133 -0.74795,0.76238 -1.49707,1.52686 -2.16932,2.35809 -0.45038,0.53946 -0.96217,1.01644 -1.38687,1.57818 -0.70507,0.72477 -1.4685,1.39515 -2.11513,2.17477 -0.45275,0.48501 -0.91127,0.96512 -1.38047,1.43422 -0.66884,0.62029 -1.33979,1.23675 -1.9384,1.92915 -0.64653,0.7423 -1.16305,1.56343 -1.70547,2.38233 -0.652942,0.90719 -1.207421,1.87088 -1.80335,2.81516 -0.742931,1.07758 -1.607754,2.05607 -2.449266,3.05696 -0.936755,1.07075 -1.97207,2.03602 -3.006127,3.01193 -1.343245,1.20266 -2.679232,2.41424 -4.049874,3.58571 0,0 6.380853,-2.58582 6.380853,-2.58582 z"
          inkscape:connector-curvature="0" />
       <path
          style="fill:#c87137;stroke-width:0.264583"
          id="path156"
          d="m 102.3977,242.96356 c 2.15644,-1.25588 4.31287,-2.51176 6.46931,-3.76764 0.2066,-0.13042 0.83175,-0.51279 0.6198,-0.39127 -1.74883,1.00262 -3.48919,2.01995 -5.23092,3.03486 -0.17587,0.10249 0.35677,-0.19612 0.53327,-0.29752 6.27553,-3.60535 4.30158,-2.40353 6.79836,-3.93006 0.14454,-0.0837 0.57811,-0.33479 0.43362,-0.25102 -13.829244,8.01795 0.0254,-0.0101 0.89548,-0.53922 0.20209,-0.1229 0.87784,-0.8215 1.11964,-1.03076 0.58794,-0.60079 1.03976,-1.33552 1.68606,-1.8803 0.63446,-0.3837 1.07286,-0.98525 1.61353,-1.46276 0.0676,-0.0941 0.11715,-0.2042 0.20264,-0.28241 0.2318,-0.21205 0.5243,-0.34708 0.77445,-0.53714 0.54866,-0.41686 1.10576,-0.80714 1.67572,-1.19535 1.94856,-1.28593 5.74707,-3.6081 -3.30425,1.82114 -0.29785,0.17866 0.61497,-0.32327 0.92703,-0.47575 0.67892,-0.33172 0.86004,-0.39403 1.53328,-0.66995 0.97719,-0.28198 1.86712,-0.77368 2.8034,-1.15566 0.60735,-0.26073 1.26616,-0.33063 1.89756,-0.5045 0.96752,-0.29954 1.88834,-0.72144 2.84001,-1.06463 0.88888,-0.27747 1.81221,-0.40981 2.73147,-0.53808 0,0 5.49333,-4.0825 5.49333,-4.0825 v 0 c -0.93886,0.073 -1.86074,0.23559 -2.78624,0.40979 -0.98014,0.26441 -1.87689,0.71615 -2.83276,1.04586 -0.62475,0.24726 -1.25322,0.32877 -1.90874,0.47428 -0.98165,0.35084 -1.86516,0.88787 -2.86233,1.19584 -3.90244,1.44739 -7.41993,3.75993 -10.88529,6.04073 -0.94537,0.6563 -1.91095,1.30755 -2.69203,2.16033 -0.4891,0.53429 -1.0931,0.94036 -1.59914,1.45789 -0.54849,0.62911 -1.07206,1.28437 -1.69832,1.8396 -0.50867,0.44783 -1.54347,1.16074 -1.1376,0.93433 11.52073,-6.42674 2.47645,-1.59886 -1.3491,0.7705 -1.95732,1.15249 -3.6278,2.13425 4.97585,-2.85766 0.18181,-0.10549 -0.37411,0.19207 -0.55629,0.29691 -2.16087,1.24346 -4.31819,2.4931 -6.47255,3.74781 -0.2129,0.12399 -0.84298,0.5102 -0.62897,0.38816 1.76506,-1.0065 3.52162,-2.02781 5.28243,-3.04172 0,0 -5.36171,4.33787 -5.36171,4.33787 z"
          inkscape:connector-curvature="0" />
       <path
          style="fill:#c87137;stroke-width:0.264583"
          id="path173"
          d="m 83.032456,165.90248 c 0.160113,-0.13716 0.315063,-0.28058 0.480341,-0.41147 0.49222,-0.38981 0.706768,-0.52164 1.245618,-0.84711 0.195197,-0.1179 0.788596,-0.45844 0.591283,-0.34411 -5.595964,3.24242 -7.193111,4.13777 -5.028949,2.92169 0.622427,-0.37475 1.337964,-0.51413 2.040369,-0.65969 0.736725,-0.15344 1.485207,-0.22389 2.235367,-0.26395 0.650605,-0.0229 1.301292,-0.0321 1.95227,-0.0305 0,0 5.576964,-4.05138 5.576964,-4.05138 v 0 c -0.649044,8e-4 -1.297929,-0.0186 -1.946833,-0.005 -0.776213,0.0159 -1.551191,0.0633 -2.317824,0.1927 -0.730972,0.13101 -1.465593,0.24161 -2.166482,0.48862 -3.113461,1.64599 -6.399475,3.26937 -9.043255,5.65372 0,0 6.381131,-2.64315 6.381131,-2.64315 z"
          inkscape:connector-curvature="0" />
       <path
          style="fill:#c87137;stroke-width:0.264583"
          id="path175"
          d="m 53.222032,211.80079 c 0.09854,1.72063 0.03514,3.44473 0.02275,5.16671 0.01405,1.25904 -0.0114,2.51804 -0.009,3.7771 -0.06256,1.19279 0.163528,2.44077 -0.08601,3.61659 -0.151942,0.94525 -0.5003,1.84094 -0.78464,2.75123 -0.408792,1.24012 -0.436912,2.57123 -0.48773,3.86594 0.01243,0.973 7.93e-4,1.94598 -0.01209,2.91889 0,0 6.066967,-3.08639 6.066967,-3.08639 v 0 c -5.29e-4,-0.97167 -0.0031,-1.94413 0.06378,-2.91418 0.06832,-1.2553 0.150799,-2.51962 0.586243,-3.71217 0.31169,-0.94223 0.647358,-1.88304 0.755422,-2.876 0.07468,-1.22647 -0.03536,-2.45804 0.02529,-3.68589 0.0024,-1.256 -0.02312,-2.51193 -0.009,-3.76791 -0.01252,-1.72974 -0.07505,-3.46144 0.02275,-5.18991 0,0 -6.15473,3.13599 -6.15473,3.13599 z"
          inkscape:connector-curvature="0" />
     </g>
      </svg:g>
    `,
    styleUrls: ['./node.component.css']
  })
// Implementing SimulationNodeDatum interface into our custom Node class
export class NodeComponent {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    
    id: string;
    @Input('nodeComponent') node: any;
    constructor() {
        
    }
}