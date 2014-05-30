
** Calculate BAB // FB = FULL BAB, MB = MEDIUM BAB, SM = SLOW BAB.
** Calculate CMD's / CMB's
** Calculate spell resistance
** Calculate spell DC's

**Spells link logic
= If(C18 <> "", Hyperlink("http://www.d20pfsrd.com/magic/all-spells/" & Lower(Left(C18, 1)) & "/" & Substitute(Substitute(Substitute(Substitute(Substitute(Substitute(Lower(C18), ", communal", ""), ", lesser", ""), ", greater", ""), ", mass", ""), " ", "-"), "'","-"), "●"), "")