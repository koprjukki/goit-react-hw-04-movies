(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{85:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),i=a(16),o=a(15),s=a(0),c=a.n(s),u=a(55),l=(a(85),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={movies:[]},e.componentDidMount=function(){e.drowReviewsPages()},e.drowReviewsPages=function(){var t=e.props.match.params.movieId;Object(u.d)(t).then((function(t){var a=t.data;return e.setState({movies:a.results})}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.movies;return c.a.createElement(c.a.Fragment,null,e.length>0?c.a.createElement("ul",{className:"reviewscontainer"},e.map((function(e){var t=e.author,a=e.id,n=e.content;return c.a.createElement("li",{className:"reviewsitem",key:a},c.a.createElement("h4",null,"Author: ",t),c.a.createElement("p",null,n))}))):c.a.createElement("p",{className:"reviewscontainer"},"We don't have any reviews for this movie."))}}]),a}(s.Component));t.default=l}}]);
//# sourceMappingURL=ReviewsPage.6d0e9476.chunk.js.map