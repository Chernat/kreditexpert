$(function(){
    $( "#mouseclick" ).click( function(){
        var vis = Array( 'block', 'none' ) ;
        if ( $( "#div1" ).is( ':visible' ) ) { vis = Array( 'none', 'block' ) ; }
        $( "#div1" ).css( 'display', vis[0] ) ;
        $( "#div2" ).css( 'display', vis[1] ) ;
    })
});
