#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Snodi
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
\usepackage{tikz, pgfplots, graphicx, amsmath}
\usetikzlibrary{positioning,matrix,arrows}
\usetikzlibrary{shapes,decorations,shadows,fadings,patterns}
\usetikzlibrary{decorations.markings}
\pgfplotsset{compat=newest}

%% Stile globale per i grafici
\pgfplotsset{
  every axis/.style={
    axis lines       = center,
    xlabel style     = {anchor=west},
    ylabel style     = {anchor=south},
    tick label style = {font=\small},
    grid             = both,
    grid style       = {line width=0.2pt, draw=gray!30},
  },
  /pgf/number format/use comma,   % virgola come separatore decimale (IT)
}

%% Stile per funzioni principali vs secondarie
\pgfplotsset{
  funzione principale/.style = {red, thick},
  funzione secondaria/.style = {red!70!black, dashed, thick},
  punto evidenziato/.style   = {only marks, mark=*, mark size=2pt, mark options={fill=ptxaccent}},
}

END_LATEX_IMAGE_PREAMBLE
}
