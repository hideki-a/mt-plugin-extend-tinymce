package ExtendTinyMCE::App;

use strict;
use warnings;

sub template_output_edit_entry {
    my ($cb, $app, $tmpl_str_ref, $param, $tmpl) = @_;
    my $old = '<\/head>';
    my $new = "<script src=\"" . $app->static_path() . "plugins/ExtendTinyMCE/extension_mce5.js\"></script>\n</head>";

    $$tmpl_str_ref =~ s!$old!$new!;
}

1;
