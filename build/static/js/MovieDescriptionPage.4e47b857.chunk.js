(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{55:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"d",(function(){return s}));var n=a(56),c=a.n(n),o="c4bc95402830765a22c2cbbc020d255a",r=function(){return c.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o))},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return c.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))},l=function(e){return c.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"))},u=function(e){return c.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o))},s=function(e){return c.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}},91:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a(14),o=a(16),r=a(15),i=a(0),l=a.n(i),u=a(2),s=a(55),m=a(7),p=a(9),v=function(e){var t=e.location,a=e.poster_path,n=e.title,c=e.release_date,o=e.vote_average,r=e.overview,i=e.genres,u=e.id,s=e.onGoBack;return l.a.createElement("div",{className:"container"},l.a.createElement("button",{onClick:s}," Go back"),l.a.createElement("div",{className:"description"},a&&l.a.createElement("img",{className:"img",src:"https://image.tmdb.org/t/p/w400".concat(a),alt:""}),l.a.createElement("div",null,l.a.createElement("h2",null,n," (","".concat(c).slice(0,4),")"),l.a.createElement("p",null," User Score: ",10*"".concat(o),"%"),l.a.createElement("h2",null,"Overview"),l.a.createElement("p",null,r),l.a.createElement("h2",null,"Genres"),l.a.createElement("ul",null,i&&i.length>0&&i.map((function(e){var t=e.id,a=e.name;return l.a.createElement("li",{key:t},a)}))))),l.a.createElement("div",null,l.a.createElement("p",null,"Additional information"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.c,{to:{pathname:"/movies/".concat(u,"/cast"),state:t.state}},"Cast")),l.a.createElement("li",null,l.a.createElement(p.c,{to:{pathname:"/movies/".concat(u,"/reviews"),state:t.state}},"Reviews")))))},h=Object(i.lazy)((function(){return a.e(1).then(a.bind(null,88))})),d=Object(i.lazy)((function(){return a.e(5).then(a.bind(null,89))})),g=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={movies:[],locationLink:""},e.componentDidMount=function(){var t=e.props,a=t.match,n=t.location,c=a.params.movieId;n.state&&e.setState({locationLink:n.state.locationLink}),Object(s.b)(c).then((function(t){var a=t.data;return e.setState({movies:a})}))},e.handleGoBack=function(){var t=e.props,a=t.location,n=t.history;return a.state?n.push(a.state.from):a.state==={}?n.push(a.pathname):void n.push("/movies")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies;return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,Object.assign({location:this.props.location},e,{onGoBack:this.handleGoBack})),l.a.createElement(u.a,{exact:!0,path:m.a.MOVIES_CAST,component:h}),l.a.createElement(u.a,{path:m.a.MOVIE_REVIEWS,component:d}))}}]),a}(i.Component);t.default=g}}]);
//# sourceMappingURL=MovieDescriptionPage.4e47b857.chunk.js.map