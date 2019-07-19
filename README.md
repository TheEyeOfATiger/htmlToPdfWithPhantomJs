# Project purpose:
A package suitable for html to pdf generation. It contains a wrapper written in PHP for phantom api and a script written in javascript that will trigger phantom to convert html to pdf.\
It is more reliable and faster than mpdf or fpdf.

#### Use Phantom versions below or equal to 1.9.8!

(1) PhantomJs > 1.9.X has problems generating table and using page-breaks. That is why it will be wise to use PhantomJs major version 1.\
(2) Using/including resources over https, use openssllib <1.2.X and all will be good. More precise for ubuntu 14/16 you can use openssl 1.1.0f.

#### You can always fork and add other functionalities.