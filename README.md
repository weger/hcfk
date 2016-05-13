# hcfk
[![Build Status](https://travis-ci.org/weger/hcfk.svg)](https://travis-ci.org/weger/hcfk) [![Coverage Status](https://coveralls.io/repos/github/weger/hcfk/badge.svg?branch=master)](https://coveralls.io/github/weger/hcfk?branch=master)

highlight code for keynote

## Installing
````bash
// install brew & highlight
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"    // brew
$ brew install highlight    // highlight
````

````javascript
$ [sudo] npm install hcfk -g
````

## Basic Usage
1. `[cmd-c]` copying your code to the pasteboard
2. run command

    ````
    $ hcfk
    ````
3. `[cmd-v]` pasting to the keynote

## Types
Currently highlight supports the following programming languages, markup languages and configuration files:

````
NAME                            File extensions

ABAP/4                        : abap4 ( abp )
ABC                           : abc
Advanced Backus-Naur Form     : abnf
Action Script                 : actionscript ( as )
ADA95                         : ada ( a adb ads gnad )
Agda                          : agda
ALGOL 68                      : algol ( alg )
AMPL                          : ampl ( dat run )
AMTrix                        : amtrix ( hnd s4 s4h s4t t4 )
AppleScript                   : applescript
Arc                           : arc
ARM                           : arm
AS/400 CL                     : as400cl
ASCEND                        : ascend ( a4c )
ASP                           : asp ( ascx ashx aspx )
Abstract                      : aspect ( was wud )
Assembler                     : assembler ( 29k 68s 68x a51 asm s x86 )
Applied Type System           : ats ( dats )
AutoHotKey                    : autohotkey ( ahk )
AutoIt                        : autoit ( au3 )
Avenue                        : avenue
(G)AWK                        : awk
DOS Batch                     : bat ( cmd )
BBcode                        : bbcode
BCPL                          : bcpl
BibTeX                        : bibtex ( bib )
Biferno                       : biferno ( bfr )
Bison                         : bison ( y )
Blitz Basic                   : blitzbasic ( bb )
BM Script                     : bms
Backus-Naur Form              : bnf
Boo                           : boo
C and C++                     : c ( c++ cc cpp cu cxx h hh hpp hxx )
Ceylon                        : ceylon
Charmm                        : charmm ( inp )
CHILL                         : chill ( chl )
Clean                         : clean ( icl )
ClearBasic                    : clearbasic ( cb )
Clipper                       : clipper
Clojure                       : clojure
Clips                         : clp
COBOL                         : cobol ( cbl cob )
ColdFusion MX                 : coldfusion ( cfc cfm )
Generic config files          : conf
Crack                         : crack
Crack                         : crk
C#                            : csharp ( cs )
CSS                           : css
D                             : d
Dart                          : dart
Diff                          : diff ( patch )
Dylan                         : dylan
Extended Backus-Naur Form     : ebnf
Eiffel                        : eiffel ( e se )
Erlang                        : erlang ( erl hrl )
Euphoria                      : euphoria ( eu ew ex exw wxu )
Express                       : express ( exp )
FAME                          : fame ( fame )
Felix                         : felix ( flx )
Fortran 77                    : fortran77 ( f for ftn )
Fortran 90                    : fortran90 ( f90 f95 )
Frink                         : frink
F#                            : fsharp ( fs fsx )
Java FX                       : fx
Gambas                        : gambas ( class )
gdb                           : gdb
Go                            : go
Graphviz                      : graphviz ( dot )
Haskell                       : haskell ( hs )
haXe                          : haxe ( hx )
Hecl                          : hcl
HTML                          : html ( htm xhtml )
Apache Config                 : httpd
Icon                          : icon ( icn )
IDL                           : idl
Interactive Data Language     : idlang
Lua (for LuaTeX)              : inc_luatex
Informix                      : informix ( 4gl )
INI                           : ini ( desktop doxyfile )
Inno Setup                    : innosetup ( iss )
INTERLIS                      : interlis ( ili )
IO                            : io
Jasmin                        : jasmin ( j )
Java                          : java ( groovy grv )
Javascript                    : js
JSP                           : jsp
Julia                         : julia ( jl )
Kotlin                        : kotlin ( kt )
LDAP                          : ldif
LESS                          : less
Haskell LHS                   : lhs
Lilypond                      : lilypond ( ly )
Limbo                         : limbo ( b )
Linden Script                 : lindenscript ( lsl )
Lisp                          : lisp ( cl clisp el lsp sbcl scom )
Logtalk                       : logtalk ( lgt )
Lotos                         : lotos
Lotus                         : lotus ( ls )
Lua                           : lua
Luban                         : luban ( lbn )
Make                          : make ( mak makefile mk )
Maple                         : maple ( mpl )
Matlab                        : matlab ( m )
Maya                          : maya ( mel )
Mercury                       : mercury
Miranda                       : miranda
Modula2                       : mod2 ( def mod )
Modula3                       : mod3 ( i3 m3 )
Modelica                      : modelica ( mo )
MoonScript                    : moon
MaxScript                     : ms
MSSQL                         : mssql
Magic eXtensible Markup       : mxml
Notation3 (N3), N-Triples, Turtle, SPARQL: n3 ( nt ttl )
Nasal                         : nasal ( nas )
NeXT Byte Codes               : nbc
Nemerle                       : nemerle ( n )
NetRexx                       : netrexx ( nrx )
Nginx configuration           : nginx
Nice                          : nice
NSIS                          : nsis ( nsi )
Not eXactly C                 : nxc
Oberon                        : oberon ( ooc )
Objective C                   : objc
Objective Caml                : ocaml ( ml mli )
Octave                        : octave
OpenObjectRexx                : oorexx
Object Script                 : os
Oz                            : oz
Paradox                       : paradox ( sc )
Pascal                        : pas
Portable Document Format      : pdf
Perl                          : perl ( cgi perl pl plex plx pm )
PHP                           : php ( php3 php4 php5 php6 )
Pike                          : pike ( pmod )
PL/1                          : pl1 ( bdy ff fp fpp rpp sf sp spb spe spp sps wf wp wpb wpp wps )
PL/Perl                       : plperl
PL/Python                     : plpython
PL/Tcl                        : pltcl
POV-Ray                       : pov
Prolog                        : pro
Progress                      : progress ( i p w )
PostScript                    : ps
Microsoft PowerShell          : ps1
PATROL                        : psl
Pure                          : pure
Pyrex                         : pyrex ( pyx )
Python                        : python ( py )
Qore                          : q
QMake Project                 : qmake
QML                           : qml
Qu                            : qu
R                             : r
Rebol                         : rebol
Rexx                          : rexx ( rex rx the )
Relax NG                      : rnc
RPG                           : rpg
RPL Programming Language      : rpl
Rust                          : rs
Ruby                          : ruby ( gemfile pp rakefile rb rjs ruby )
PowerPC Assembler             : s
SAS                           : sas
Scala                         : scala
Scilab                        : scilab ( sce sci )
SASS/SCSS                     : scss
Bash                          : sh ( bash ebuild eclass zsh )
SMALL                         : small ( sma )
Smalltalk                     : smalltalk ( gst sq st )
Standard ML                   : sml
SNMP                          : snmp ( mib smi )
SNOBOL                        : snobol ( sno )
RPM Spec                      : spec
SPIN SQL                      : spn
PL/SQL                        : sql
Squirrel                      : squirrel ( nut )
Stylus                        : styl
Swift                         : swift
Sybase SQL                    : sybase
Tcl/Tk                        : tcl ( itcl wish )
TCSH                          : tcsh
TeX and LaTeX                 : tex ( cls sty )
TypeScript                    : ts
Transact-SQL                  : tsql
TTCN3                         : ttcn3
Plain text                    : txt ( text )
UPC (and C, technically)      : upc
Vala                          : vala
Visual Basic                  : vb ( bas basic bi vbs )
Verilog                       : verilog ( v )
VHDL                          : vhd
XML                           : xml ( dtd ecf ent glade hdr hub jnlp nrm resx sgm sgml svg tld vxml wml xsd xsl )
SuperX++                      : xpp
Yaiff                         : yaiff
Yang                          : yang
Zonnon                        : znn
````
## Styles
![colour style](screenshots.png)

## Requires
- [brew](http://brew.sh/index_zh-cn.html)
- [highlight](http://www.andre-simon.de/doku/highlight/en/highlight.php)

## References
- http://alistapart.com/blog/post/syntax-highlighting-outside-your-editor
- http://www.peterbe.com/plog/highlighted-code-syntax-in-keynote

## License
MIT © hcfk
