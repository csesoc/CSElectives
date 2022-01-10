import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';

import CSESocLogo from '../assets/csesoc-logo.svg';

// This footer will appear on all pages
const Footer = () => {
  return (
    <Container>
      <Grid columns='equal'>
        <Grid.Column width={3}>
          <Image className='csesoc-logo' src={CSESocLogo} size='small' />
          <p>
            © 2021 — CSESoc UNSW
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            CSESoc is the constituent student society of UNSW’s School of Computer Science and Engineering.
            We do not represent the School, Faculty, or University.
          </p>
          <p>
            This website seeks to be a general guide, but its information has not been officially
            endorsed and is subject to change or correction.
            This is not official advice, and you should confirm any statements are correct with regard to
            your situation before relying on it.
            Any opinions expressed are those of the authors, and may not necessarily represent those of
            the University, Faculty, School, or Society.
          </p>
          <p>
            You are responsible for any content provided and should only post content which you are
            comfortable with sharing. We reserve the right to remove content from the website if it
            is deemed to be abusive, offensive or otherwise inappropriate. UNSW policies apply and if a
            breach is detected, further action may be taken with the University.
          </p>
          {/* eslint-disable max-len */}
          <pre>MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMWNNXXXNNNNNNNNNNNNNNNXXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMWNKOOOKXXNNNNNNNNNNNNNNX0OKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMWKxxkkO0KXNNNNNNNNNNNNNXKOOKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMWXkllxkO0XXNNNNNNNNNNNXKOO0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMWO::ok0KXNNNNNNNNNNNXK00KWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMWx:cxO0XX0OkxxddolcccllxWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMXl;lldolcc:k0c;;;,,,. ,WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMWo .;lcccldXWN00xc,,,olKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMW0:&apos;;ccoxOXNWWW0c::;,.d0WWWK0O0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMMKOo;:clc:xXK0KNO:;;,.l;:Odoc:dXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMWWNNNNNOol.,::cckoc:;:ol:lc:;&apos;.&apos;&apos;&apos;&apos;ck0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMW0dc;;;;::oo:ccll::c;;;&apos;.........&apos;,llcdOXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMWKl;;;,&apos;&apos;..............;:codxl;,,cddddkXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMWNkc::;,..&apos;,&apos;dkxxOOOx:xxc;.&apos;..cl:odoxXXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMWXkl;lc:.:,.&apos;,..,,,cd&apos;.&apos;:cl;;xx:ol:dO0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMNOxocc;.;l&apos;;:odxo,oKklxxddkOkclxoO00WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMWX0odl:o;.lxkdOO0Kkd0KxOKOkkdo;;.  .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMWN00c;;c,.;ookO0KOdk0xcx0Odld;:.    .XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMXl;c:.. .,;dx00d&apos;.;,;xOkdxO;kNo    &apos;kNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMWWKl,&apos;     coxkO0OxoloO0xdkOxoK0.      .&apos;cxxxkk0XWMWNWMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMWNOl,..       ..&apos;:k0kdoccllcod00ld;&apos;x.      .;ooolllldkl:cxWMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMNold,... .       .:;,:kOOxc,&apos;;oOk00x&apos;...&apos;&apos;.    .:oolcccllllc:;x0WMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMx.,,&apos;  . .         .:oddllodOKXXkl:.. ..,&apos;       .llccccllloc&apos;,lNMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMW;.,;,.  .          ldxOkkoco0000k&apos; .&apos;,&apos;,,&apos;..     ,ll:;:lclOdc,.:&apos;lNMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMc  ..&apos;..          :k,;cdxoxx;,cld;   .,,,...&apos;...&apos;,,;,&apos;&apos;.;:dcc&apos; ;, :WMMMMMMMMM</pre>
          <pre>MMMMMMMMMWl .   ...        .oOx&apos;&apos;,xOO0kx,,dd;oc,&apos;.:xx&apos;&apos;..,,&apos;... ..;::::. ol..0MMMMMMMMM</pre>
          <pre>MMMMMMMMMo..               ddkko;:oxoc:;..oOOKWWNK0Ko&apos;.  ....,&apos; .;;;;:. .o: .xXMMMMMMMM</pre>
          <pre>MMMMMMMMM0  ..         ...&apos;xoxkxdlokOkxl:oK00KWWWXKKx..,;,,;,;&apos;.&apos;,,,&apos;,  :,  &apos;c,WMMMMMMM</pre>
          <pre>MMMMMMMMMWo .&apos;,&apos;...    .&apos;;ol::OK0Oxolcc,lxdOO0NWWWXKO..,;,,&apos;,,&apos;.&apos;&apos;&apos;&apos;.  ;.  ;: &apos;WMMMMMMM</pre>
          <pre>MMMMMMMMNd;&apos;,;;;,,,,  .lOoxc&apos;&apos;:ddlclcc;:OkdkOKNNWWWX0 .&apos;;,,;;,&apos;;&apos;&apos;,. .;. &apos;kc  o0MMMMMMM</pre>
          <pre>MMMMMMMMO  ....,;&apos;,,;c0Kkcxo,&apos;&apos;&apos;cd;... &apos;0O:okOKXNWWXx .&apos;;;;;,&apos;&apos;,,:;  .. :X: ,KoxMMMMMMM</pre>
          <pre>MMMMMMMMWo  ...&apos;..;,;kKK0:ko;,,&apos;,&apos;... .,0XOOXNK00KXNc .,;;;;,&apos;&apos;&apos;:c,  ..;c..:X0dkMMMMMMM</pre>
          <pre>MMMMMMMMWd......,:;.lXXKKkodo:;&apos;:d,    ,OKNWWKNWNXOk: .,,,;c,&apos;&apos;.lc.  .c:,;oXNxd0WMMMMMM</pre>
          <pre>MMMMMMMMO. .....&apos;c&apos;.dNN0OK0ddc:;kxo.   ,OOXNWWXKXNKkc .,,,,;,,&apos;.lc.  .okkxNXdlxWMMMMMMM</pre>
          <pre>MMMMMMMWd  ....,lc. lXNX0OKO,dOKkl;  . &apos;00OXNNNWX0XKd .,,,,,,,.,occ.  ,KXNWXkKWMMMMMMMM</pre>
          <pre>MMMMMMMWx..,:;cl;...&apos;OKNN0KxdKo.       .d0ONXNWWWKK00  .&apos;,,,,&apos; :l:l;  .0XWMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMNd&apos;,;,;:&apos;....&apos;:k0KK0O0o.         .lcdKWWWNK00O. .,,,,,..lldd:cx;kXWMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMWc&apos;.&apos;..... ... .:c,okdc.    ..    .xxcOWWN00K0.  ,,,&apos;&apos; ;loK0kNNdkXWMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMM0, .....&apos;.        &apos;ll.     ..     oXXKK0k0ONXl  &apos;;,,..clkWMMMMWNMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMWx  .....                   ..    ;000kxOOXWNK,  ,,, &apos;olKMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMN&apos; ...  .        ..              ,NKOkk0KNWNWk, .&apos;; oWNWMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMWx                                .ldoc:dNNWWWd. .c.:WMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMWO:&apos;&apos;,&apos;                         .;;,cdONNWMMMNc...;:XWMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMWWX:&apos;.&apos;&apos;..                 .ddk0KXNWMMMMWK0XkNWKNMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMWWWWNd..             .  .KNNWNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMMWo.             ,, cd0WWMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMWXd&apos;  ;x;.       .:.&apos;XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMWN0ccdOOO00Ox..&apos;l;l&apos;OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWN:.cXKXOOWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXxkNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</pre>
          <pre>                                                                                       </pre>
          <pre>                           SUPPORT OPEN SOURCE CONTRIBUTORS                            </pre>
          {/* eslint-disable max-len */}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Footer;
