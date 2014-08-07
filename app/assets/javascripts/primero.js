$(document).ready(function() {

  /**************************************************************************************
  * DataTables
  */
	var pagination = typeof pagination_details == 'undefined' ? false : pagination_details
	
	var entity_table = $('.list_view, .list_table').DataTable({
		searching: false,
		language: {
      info: pagination.info
  	},
  	lengthChange: false,
		pageLength: 20,
		primero_page: pagination.current_page,
		primero_pages: pagination.total_pages
	});


	  entity_table.settings()._iDisplayLength = 34;
  	entity_table.settings()._iDisplayStart = 0;
  	entity_table.settings()._iRecordsDisplay = 40;


	window.t = entity_table;
});