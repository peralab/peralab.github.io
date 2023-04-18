	jQuery(document).ready(function() {
		   jQuery('#fullpage').fullpage({
				verticalCentered: true,
        		anchors: ['portada','solucionesdigital','trayectoria','eventospresenciales','nuestroservicios','congresos','convenciones','eventospresencialesdos','solucionesdigitales','encuestas_agenda','desarrollo_app','actividades_intrgracion','actividadesdos','casoexito','casoexitofin','opcionesvirtuales','setvirtual','setvirtual2','cortinillas','contato'],
				resize : true,
				scrollingSpeed: 700,
				easing: 'easeInQuart',
				menu: '#menu',
				navigation: false,
				navigationPosition: 'right',
				loopBottom: false,
				loopTop: false,
				autoScrolling: true,
				css3: false,
				paddingTop: 0,
				paddingBottom: 0,
				slidesNavigation: true,
				controlArrows:false,
				
				afterLoad: function(anchorLink, index){   

					console.log('anchor-->'+anchorLink+' : '+index+'\n');

					if(anchorLink=='portada'){
						jQuery('#section0').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#img1').css('display','block');
						jQuery('#image_princi').css('display','block');
						jQuery('#aniversario').css('display','block');
						jQuery('#capa4_img').css('display','block');
						jQuery('#cinnova_log_img').css('display','block');
						jQuery('#confienza').css('display','block');
					}
					else
					{	jQuery('#section0').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#img1').css('display','none');
						jQuery('#image_princi').css('display','none');
						jQuery('#aniversario').css('display','none');
						jQuery('#capa4_img').css('display','none');
						jQuery('#cinnova_log_img').css('display','none');
						jQuery('#confienza').css('display','none');
					}
					if(anchorLink=='solucionesdigital'){
						jQuery('#section1').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
					    jQuery('#imag_solucion').css('display','block');
					    jQuery('#soluciones').css('display','block');
					    setTimeout(function(){ 
					    	jQuery('#image_solucion').css('display','block'); 
						    jQuery('#image_solucion2').css('display','block');
						    jQuery('#image_solucion3').css('display','block');
						    jQuery('#image_solucion4').css('display','block');
						    jQuery('#image_solucion5').css('display','block');
						    jQuery('#image_solucion6').css('display','block');
						    jQuery('#image_solucion7').css('display','block');
						    jQuery('#image_solucion8').css('display','block');

					    }, 2000);

					    jQuery('#digitales').css('display','block');
					    jQuery('#eventos_text').css('display','block');
					    jQuery('#description_solu').css('display','block');
					    jQuery('#description_solu2').css('display','block');
					    jQuery('#description_solu3').css('display','block');
					    jQuery('#description_solu4').css('display','block');
					    jQuery('#description_solu5').css('display','block');
					    jQuery('#description_solu6').css('display','block');
					    jQuery('#description_solu7').css('display','block');
					    jQuery('#description_solu8').css('display','block');  
					    
					}else{
						console.log("entra")
						jQuery('#section1').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#imag_solucion').css('display','none');
						jQuery('#soluciones').css('display','none');
						jQuery('#digitales').css('display','none');
						jQuery('#eventos_text').css('display','none');
						jQuery('#description_solu').css('display','none');
						jQuery('#description_solu2').css('display','none');
						jQuery('#description_solu3').css('display','none');
						jQuery('#description_solu4').css('display','none');
						jQuery('#description_solu5').css('display','none');
						jQuery('#description_solu6').css('display','none');
						jQuery('#description_solu7').css('display','none');
						jQuery('#description_solu8').css('display','none');
						jQuery('#image_solucion').css('display','none');
						jQuery('#image_solucion2').css('display','none');
						jQuery('#image_solucion3').css('display','none');
						jQuery('#image_solucion4').css('display','none');
						jQuery('#image_solucion5').css('display','none');
						jQuery('#image_solucion6').css('display','none');
						jQuery('#image_solucion7').css('display','none');
						jQuery('#image_solucion8').css('display','none');
						

					}

					if(anchorLink=='aplicaciones_productivas'){
						jQuery('#section2').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-2s');
					    jQuery('#image_aplica_prod').css('display','block');
					    jQuery('#punto_naranja').css('display','block');
					    jQuery('#punto_naranja2').css('display','block');
					    jQuery('#punto_naranja3').css('display','block');
					    jQuery('#punto_naranja4').css('display','block');
					    jQuery('#punto_naranja5').css('display','block');
					    jQuery('#texto_punto_apli').css('display','block');
					    jQuery('#texto_punto_apli2').css('display','block');
					    jQuery('#texto_punto_apli3').css('display','block');
					    jQuery('#texto_punto_apli4').css('display','block');
					    jQuery('#texto_punto_apli5').css('display','block');
					    jQuery('#content_naranja').css('display','block');
					}else{
						jQuery('#section2').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#image_aplica_prod').css('display','none');
						jQuery('#punto_naranja').css('display','none');
						jQuery('#punto_naranja2').css('display','none');
						jQuery('#punto_naranja3').css('display','none');
						jQuery('#punto_naranja4').css('display','none');
						jQuery('#punto_naranja5').css('display','none');
						jQuery('#texto_punto_apli').css('display','none');
						jQuery('#texto_punto_apli2').css('display','none');
						jQuery('#texto_punto_apli3').css('display','none');
						jQuery('#texto_punto_apli4').css('display','none');
						jQuery('#texto_punto_apli5').css('display','none');
						jQuery('#content_naranja').css('display','none');
					}

					if(anchorLink=='trayectoria'){
						jQuery('#section3').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-2s');
						jQuery('#image_aplica_prod2').css('display','block');
						jQuery('#content_naranja2').css('display','block');
					}else{
						jQuery('#section3').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#image_aplica_prod2').css('display','none');
						jQuery('#content_naranja2').css('display','none');
					}

					if(anchorLink=='encuestas_agenda'){
						jQuery('#section4').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#encuestas_votaciones').css('display','block');
						jQuery('#encuestas_votaciones2').css('display','block');
						jQuery('#agenda').css('display','block');
						jQuery('#texto_encuestas').css('display','block');
						jQuery('#texto_agenda').css('display','block');
						jQuery('#image_encuestas').css('display','block');
						jQuery('#content_desk_encuestas').css('display','block');
						jQuery('#conten_help_animate').css('display','block');
						jQuery('#cuadro_naranja_encu_animate').css('display','block');
					}else{
						console.log("entra")
						jQuery('#section4').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#encuestas_votaciones').css('display','none');
						jQuery('#encuestas_votaciones2').css('display','none');
						jQuery('#agenda').css('display','none');
						jQuery('#texto_encuestas').css('display','none');
						jQuery('#texto_agenda').css('display','none');
						jQuery('#image_encuestas').css('display','none');
						jQuery('#content_desk_encuestas').css('display','none');
						jQuery('#conten_help_animate').css('display','none');
						jQuery('#cuadro_naranja_encu_animate').css('display','none');
					}

					if(anchorLink=='desarrollo_app'){
						jQuery('#section5').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#conten_title_desarrollo_animate').css('display','block');
						jQuery('#conten_title_desarrollo_animate2').css('display','block');
						jQuery('#title_desarrollo_app').css('display','block');
						jQuery('#cel_inteligente_5').css('display','block');
						jQuery('#funcion_1').css('display','block');
						jQuery('#funcion_2').css('display','block');
						jQuery('#funcion_3').css('display','block');
						jQuery('#funcion_4').css('display','block');
						jQuery('#funcion_5').css('display','block');
						jQuery('#funcion_6').css('display','block');
						jQuery('#funcion_7').css('display','block');
						jQuery('#funcion_8').css('display','block');
						jQuery('#funcion_9').css('display','block');


					}else{
						jQuery('#section5').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#conten_title_desarrollo_animate').css('display','none');
						jQuery('#conten_title_desarrollo_animate2').css('display','none');
						jQuery('#title_desarrollo_app').css('display','none');
						jQuery('#cel_inteligente_5').css('display','none');
						jQuery('#funcion_1').css('display','none');
						jQuery('#funcion_2').css('display','none');
						jQuery('#funcion_3').css('display','none');
						jQuery('#funcion_4').css('display','none');
						jQuery('#funcion_5').css('display','none');
						jQuery('#funcion_6').css('display','none');
						jQuery('#funcion_7').css('display','none');
						jQuery('#funcion_8').css('display','none');
						jQuery('#funcion_9').css('display','none');

					}

					if(anchorLink=='actividades_intrgracion'){
						jQuery('#section6').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#title_actividades_6').css('display','block');
						jQuery('#sutitle_actividades_6').css('display','block');
						jQuery('#torre_6').css('display','block');
						jQuery('#zocalo_6').css('display','block');
						jQuery('#mar_6').css('display','block');
						jQuery('#texto_section6').css('display','block');
					}else{
						jQuery('#section6').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#title_actividades_6').css('display','none');
						jQuery('#sutitle_actividades_6').css('display','none');
						jQuery('#torre_6').css('display','none');
						jQuery('#zocalo_6').css('display','none');
						jQuery('#mar_6').css('display','none');		
						jQuery('#texto_section6').css('display','none');					}

					if(anchorLink=='actividades'){
						jQuery('#section7').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#texto_reto_7').css('display','block');
						jQuery('#image_reto_7').css('display','block');
						jQuery('#title_retoartico_7').css('display','block');
						jQuery('#title_CSI_7').css('display','block');
						jQuery('#image_csi_virtual_7').css('display','block');
						jQuery('#texto_csi_virtual_7').css('display','block');
						jQuery('#image_princ_sec6').css('display','block');
						jQuery('#texto_coctel_sec6').css('display','block');
						jQuery('#texto_des_coctel_sec6').css('display','block');
					}else{
						jQuery('#section7').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#texto_reto_7').css('display','none');
						jQuery('#image_reto_7').css('display','none');
						jQuery('#title_retoartico_7').css('display','none');
						jQuery('#title_CSI_7').css('display','none');
						jQuery('#image_csi_virtual_7').css('display','none');
						jQuery('#texto_csi_virtual_7').css('display','none');
						jQuery('#image_princ_sec6').css('display','none');
						jQuery('#texto_coctel_sec6').css('display','none');
						jQuery('#texto_des_coctel_sec6').css('display','none');
					}

					if(anchorLink=='actividadesdos'){
						jQuery('#section8').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#texto_reto_8').css('display','block');
						jQuery('#img_lote_8').css('display','block');
						jQuery('#title_retoartico_8').css('display','block');
						jQuery('#image_csi_virtual_8').css('display','block');
						jQuery('#top_cocina_8').css('display','block');
						jQuery('#texto_csi_8').css('display','block');
						jQuery('#image_princ_sec8').css('display','block');
						jQuery('#texto_coctel_sec8').css('display','block');
						jQuery('#texto_des_coctel').css('display','block');
						jQuery('#texto_des_coctel_8').css('display','block');

					}else{
						jQuery('#section8').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#texto_reto_8').css('display','none');
						jQuery('#img_lote_8').css('display','none');
						jQuery('#title_retoartico_8').css('display','none');
						jQuery('#image_csi_virtual_8').css('display','none');
						jQuery('#top_cocina_8').css('display','none');
						jQuery('#texto_csi_8').css('display','none');
						jQuery('#image_princ_sec8').css('display','none');
						jQuery('#texto_coctel_sec8').css('display','none');
						jQuery('#texto_des_coctel').css('display','none');
						jQuery('#texto_des_coctel_8').css('display','none');

					}
					if(anchorLink=='casoexito'){
						jQuery('#section9').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#title_exito_9').css('display','block');
						jQuery('#img_exito_9').css('display','block');
						jQuery('#cuadro_naranja_section9_section').css('display','block');
						jQuery('#img_sec_9_elemen1').css('display','inline-block');
						jQuery('#img_sec_9_elemen2').css('display','inline-block');
						jQuery('#img_sec_9_elemen3').css('display','inline-block');
						jQuery('#img_sec_9_elemen4').css('display','inline-block');
						jQuery('#img_sec_9_elemen5').css('display','inline-block');
						jQuery('#img_sec_9_elemen6').css('display','inline-block');
						jQuery('#img_sec_9_elemen7').css('display','inline-block');
						jQuery('#img_sec_9_elemen8').css('display','inline-block');
						jQuery('#img_sec_9_elemen9').css('display','inline-block');
						jQuery('#img_sec_9_elemen10').css('display','inline-block');
						jQuery('#img_sec_9_elemen11').css('display','inline-block');
						jQuery('#title_cnv_9').css('display','inline-block');

					}else{
						jQuery('#section9').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#title_exito_9').css('display','none');
						jQuery('#img_exito_9').css('display','none');
						jQuery('#cuadro_naranja_section9_section').css('display','none');
						jQuery('#img_sec_9_elemen1').css('display','none');
						jQuery('#img_sec_9_elemen2').css('display','none');
						jQuery('#img_sec_9_elemen3').css('display','none');
						jQuery('#img_sec_9_elemen4').css('display','none');
						jQuery('#img_sec_9_elemen5').css('display','none');
						jQuery('#img_sec_9_elemen6').css('display','none');
						jQuery('#img_sec_9_elemen7').css('display','none');
						jQuery('#img_sec_9_elemen8').css('display','none');
						jQuery('#img_sec_9_elemen9').css('display','none');
						jQuery('#img_sec_9_elemen10').css('display','none');
						jQuery('#img_sec_9_elemen11').css('display','none');
						jQuery('#title_cnv_9').css('display','none');
						
					}

					if(anchorLink=='casoexitodos'){
						jQuery('#section10').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#title_exito_10').css('display','inline-block');
						jQuery('#img_exito_10').css('display','inline-block');
						jQuery('#title_cnv_10').css('display','inline-block');
						jQuery('#cuadro_naranja_section10_section').css('display','inline-block');
						jQuery('#img_sec_10_elemen1').css('display','inline-block');
						jQuery('#img_sec_10_elemen2').css('display','inline-block');
						jQuery('#img_sec_10_elemen3').css('display','inline-block');
						jQuery('#img_sec_10_elemen4').css('display','inline-block');
						jQuery('#img_sec_10_elemen5').css('display','inline-block');
						jQuery('#img_sec_10_elemen6').css('display','inline-block');
						jQuery('#img_sec_10_elemen7').css('display','inline-block');
						jQuery('#img_sec_10_elemen8').css('display','inline-block');
						jQuery('#img_sec_10_elemen9').css('display','inline-block');
						jQuery('#img_sec_10_elemen10').css('display','inline-block');
						jQuery('#img_sec_10_elemen11').css('display','inline-block');
						jQuery('#img_sec_10_elemen12').css('display','inline-block');

					}else{
						jQuery('#section10').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#title_exito_10').css('display','none');
						jQuery('#img_exito_10').css('display','none');
						jQuery('#title_cnv_10').css('display','none');
						jQuery('#cuadro_naranja_section10_section').css('display','none');
						jQuery('#img_sec_10_elemen1').css('display','none');
						jQuery('#img_sec_10_elemen2').css('display','none');
						jQuery('#img_sec_10_elemen3').css('display','none');
						jQuery('#img_sec_10_elemen4').css('display','none');
						jQuery('#img_sec_10_elemen5').css('display','none');
						jQuery('#img_sec_10_elemen6').css('display','none');
						jQuery('#img_sec_10_elemen7').css('display','none');
						jQuery('#img_sec_10_elemen8').css('display','none');
						jQuery('#img_sec_10_elemen9').css('display','none');
						jQuery('#img_sec_10_elemen10').css('display','none');
						jQuery('#img_sec_10_elemen11').css('display','none');
						jQuery('#img_sec_10_elemen12').css('display','none');
					}

					if(anchorLink=='opcionesvirtuales'){
						jQuery('#section11').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#contenedor_title_11').css('display','inline-block');
						jQuery('#contenedor_naranja_11').css('display','inline-block');
						jQuery('#virtual1_11').css('display','inline-block');
						jQuery('#virtual2_11').css('display','inline-block');
						jQuery('#virtual3_11').css('display','inline-block');
						

					}else{
						jQuery('#section11').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#contenedor_title_11').css('display','none');
						jQuery('#contenedor_naranja_11').css('display','none');
						jQuery('#virtual1_11').css('display','none');
						jQuery('#virtual2_11').css('display','none');
						jQuery('#virtual3_11').css('display','none');

					}

					if(anchorLink=='setvirtual'){
						jQuery('#section12').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#contenedor_naranja_12').css('display','inline-block');
						jQuery('#set_image_12').css('display','inline-block');
					}else{
						jQuery('#section12').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#contenedor_naranja_12').css('display','none');
						jQuery('#set_image_12').css('display','none');
					}

					if(anchorLink=='setvirtual2'){
						jQuery('#section13').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#contenedor_naranja_13').css('display','inline-block');
						jQuery('#set_image_13').css('display','inline-block');
					}else{
						jQuery('#section13').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#contenedor_naranja_13').css('display','none');
						jQuery('#set_image_13').css('display','none');
					}
					if(anchorLink=='cortinillas'){
						console.log("entra section14")
						jQuery('#section14').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
					    jQuery('#ejemplo_14').css('display','inline-block');
					    jQuery('#formato_14').css('display','inline-block');
					    jQuery('#contenedor_naranja_14').css('display','inline-block');
					    jQuery('#ejemplo_14b').css('display','inline-block');
					    jQuery('#cortinillas_14').css('display','inline-block');
					    jQuery('#contenedor_naranja_14b').css('display','inline-block');
					}else{
						jQuery('#section14').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#ejemplo_14').css('display','none');
						jQuery('#formato_14').css('display','none');
						jQuery('#contenedor_naranja_14').css('display','none');
						jQuery('#ejemplo_14b').css('display','none');
						jQuery('#cortinillas_14').css('display','none');
						jQuery('#set_image_15a').css('display','none');
						jQuery('#contenedor_naranja_14b').css('display','none');

					}

					if(anchorLink=='eventospresenciales'){
						console.log("entra eventos presenciales")
						jQuery('#section15').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#set_image_15a_sec').css('display','inline-block');
						jQuery('#title_15a').css('display','inline-block');
						jQuery('#title_15b').css('display','inline-block');
						jQuery('#contenedor_naranja_15a').css('display','inline-block');
						jQuery('#set_image_15b').css('display','inline-block');
						jQuery('#set_image_15c').css('display','inline-block');
						jQuery('#set_image_15d').css('display','inline-block');
					}else{
						jQuery('#section15').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#set_image_15a_sec').css('display','none');
						jQuery('#title_15a').css('display','none');
						jQuery('#title_15b').css('display','none');
						jQuery('#contenedor_naranja_15a').css('display','none');
						jQuery('#set_image_15b').css('display','none');
						jQuery('#set_image_15c').css('display','none');
						jQuery('#set_image_15d').css('display','none');


					}

					if(anchorLink=='eventospresencialesdos'){
						jQuery('#section16').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#set_image_16a_anima').css('display','inline-block');
						jQuery('#title_17a_anima').css('display','inline-block');
						jQuery('#title_18b_anima').css('display','inline-block');
						jQuery('#contenedor_naranja_16a').css('display','inline-block');
						jQuery('#contenedor_naranja_19a_anima').css('display','inline-block');

					}else{
						jQuery('#section16').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#set_image_16a_anima').css('display','none');
						jQuery('#title_17a_anima').css('display','none');
						jQuery('#title_18b_anima').css('display','none');
						jQuery('#contenedor_naranja_16a').css('display','none');
						jQuery('#contenedor_naranja_19a_anima').css('display','none');

					}

					if(anchorLink=='nuestroservicios'){
						jQuery('#section17').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#title_nuestros').css('display','inline-block');
						jQuery('#title_nuestros2').css('display','inline-block');
						jQuery('#cuadro_naranja17_1').css('display','block');
						jQuery('#cuadro_naranja17_2').css('display','inline-block');
						jQuery('#cuadro_naranja17_3').css('display','inline-block');
						jQuery('#cuadro_naranja17_4').css('display','inline-block');
						jQuery('#cuadro_naranja17_5').css('display','inline-block');
						jQuery('#nuestros_ser').css('display','inline-block');
						

					}else{
						console.log("section17")
						jQuery('#section17').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#title_nuestros').css('display','none');
						jQuery('#title_nuestros2').css('display','none');
						jQuery('#cuadro_naranja17_1').css('display','none');
						jQuery('#cuadro_naranja17_2').css('display','none');
						jQuery('#cuadro_naranja17_3').css('display','none');
						jQuery('#cuadro_naranja17_4').css('display','none');
						jQuery('#cuadro_naranja17_5').css('display','none');
						jQuery('#nuestros_ser').css('display','none');
						
						

					}

					if(anchorLink=='congresos'){
						jQuery('#section18').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#img_congresos').css('display','inline-block');
						jQuery('#conten_title_18').css('display','inline-block');
						jQuery('#congresos_tipos2').css('display','initial');
					}else{
						jQuery('#section18').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#img_congresos').css('display','none');
						jQuery('#conten_title_18').css('display','none');
						jQuery('#congresos_tipos2').css('display','none');

					}


					if(anchorLink=='convenciones'){
						jQuery('#section19').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#contendor_tecto_19').css('display','inline-block');
						jQuery('#content_naranja19').css('display','inline-block');
						jQuery('#image_con_a').css('display','inline-block');
						jQuery('#image_con_b').css('display','inline-block');
						jQuery('#image_con_c').css('display','inline-block');
						jQuery('#image_con_d').css('display','inline-block');
					}else{
						jQuery('#section19').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#contendor_tecto_19').css('display','none');
						jQuery('#content_naranja19').css('display','none');
						jQuery('#image_con_a').css('display','none');
						jQuery('#image_con_b').css('display','none');
						jQuery('#image_con_c').css('display','none');
						jQuery('#image_con_d').css('display','none');

					}

					if(anchorLink=='solucionesdigitales'){
						jQuery('#section20').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#content_naranja20').css('display','inline-block');
						jQuery('#image_con_a_20').css('display','inline-block');
						jQuery('#contendor_tecto_20').css('display','inline-block');
						jQuery('#image_con_b_20').css('display','inline-block');
					}else{
						jQuery('#section20').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#content_naranja20').css('display','none');
						jQuery('#image_con_a_20').css('display','none');
						jQuery('#contendor_tecto_20').css('display','none');
						jQuery('#image_con_b_20').css('display','none');

					}
					if(anchorLink=='contato'){
						jQuery('#section21').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#contacto_image').css('display','inline-block');
					}else{
						jQuery('#section21').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#contacto_image').css('display','none');

					}

					if(anchorLink=='casoexitofin'){
						jQuery('#section22').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-1s');
						jQuery('#title_exito').css('display','inline-block');
						jQuery('#title_cnv').css('display','inline-block');
						jQuery('#img_fina').css('display','inline-block');
						jQuery('#img_finb').css('display','inline-block');
						jQuery('#img_finc').css('display','inline-block');
						jQuery('#img_exito_20').css('display','inline-block');
						jQuery('#cuadro_naranja_section22').css('display','inline-block');
					}else{
						jQuery('#section22').removeClass('animate__animated').removeClass('animate__pulse').removeClass('animate__fast');
						jQuery('#title_exito').css('display','none');
						jQuery('#title_cnv').css('display','none');
						jQuery('#img_fina').css('display','none');
						jQuery('#img_finb').css('display','none');
						jQuery('#img_finc').css('display','none');
						jQuery('#img_exito_20').css('display','none');
						jQuery('#cuadro_naranja_section22').css('display','none');

					}

					
		
				},
			
				afterRender: function(){ 
						console.log('Iniciando...\n');
						jQuery('#section0').addClass('animate__animated').addClass('animate__pulse').addClass('animate__delay-2s');
						jQuery('#imag_solucion').css('display','none');
						jQuery('#soluciones').css('display','none');
						jQuery('#digitales').css('display','none');
						jQuery('#eventos_text').css('display','none');
						jQuery('#description_solu').css('display','none');
						jQuery('#description_solu2').css('display','none');
						jQuery('#description_solu3').css('display','none');
						jQuery('#description_solu4').css('display','none');
						jQuery('#description_solu5').css('display','none');
						jQuery('#description_solu6').css('display','none');
						jQuery('#description_solu7').css('display','none');
						jQuery('#description_solu8').css('display','none');
						jQuery('#image_solucion').css('display','none');
						jQuery('#image_solucion2').css('display','none');
						jQuery('#image_solucion3').css('display','none');
						jQuery('#image_solucion4').css('display','none');
						jQuery('#image_solucion5').css('display','none');
						jQuery('#image_solucion6').css('display','none');
						jQuery('#image_solucion7').css('display','none');
						jQuery('#image_solucion8').css('display','none');
						jQuery('#image_aplica_prod2').css('display','none');
				},
		   });
		   
		   
		});
		
		