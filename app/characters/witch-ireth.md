

Spells link logic

= If(C18 <> "", Hyperlink("http://www.d20pfsrd.com/magic/all-spells/" & Lower(Left(C18, 1)) & "/" & Substitute(Substitute(Substitute(Substitute(Substitute(Substitute(Lower(C18), ", communal", ""), ", lesser", ""), ", greater", ""), ", mass", ""), " ", "-"), "'","-"), "●"), "")