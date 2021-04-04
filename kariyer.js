arama=["test","test2"]
onyazı=["2","3"]
pp=0;
t=1;
if($("#btnBasvuruTamamla").length!=0 ){
    
    setTimeout(function(){ 
        //önyazı
        $("#ddlOnyaziSeciniz").val("10159884").change();
        if ($(".firmanin-sorulari").length != 0 ){
            war=1
            ll=$(".firmanin-sorulari").find("select").length
            i=0;
            while(i<ll)
            {   p=0;
                txt=$(".firmanin-sorulari").find("select").eq(i).parent().find("label").text()
                if(txt.indexOf("engel")!=-1){
                    j=$(".firmanin-sorulari").find("select").eq(i).find("option").length
                    k=0
                    while(k<j){
                        if ($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).text().indexOf("Hayır") != -1 )
                            $(".firmanin-sorulari").find("select").eq(i).val($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).attr("value"))
                        
                        k++
                    }
                }
                else if(txt.indexOf("ücret")!=-1){
                    j=$(".firmanin-sorulari").find("select").eq(i).find("option").length
                    k=0
                    while(k<j){
                        if ($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).text().indexOf("5000") == 0 )
                            $(".firmanin-sorulari").find("select").eq(i).val($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).attr("value"))
                        
                        k++
                    }
                }
                else if(txt.indexOf("araç")!=-1){
                    j=$(".firmanin-sorulari").find("select").eq(i).find("option").length
                    k=0
                    while(k<j){
                        if ($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).text().indexOf("Evet") != -1 )
                            $(".firmanin-sorulari").find("select").eq(i).val($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).attr("value"))
                        
                        k++
                    }
                }
                else if(txt.indexOf("sigara")!=-1){
                    j=$(".firmanin-sorulari").find("select").eq(i).find("option").length
                    k=0
                    while(k<j){
                        if ($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).text().indexOf("Hayır") != -1 )
                            $(".firmanin-sorulari").find("select").eq(i).val($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).attr("value"))
                        
                        k++
                    }
                }
                else if(txt.indexOf("sonları")!=-1){
                    j=$(".firmanin-sorulari").find("select").eq(i).find("option").length
                    k=0
                    while(k<j){
                        if ($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).text().indexOf("Evet") != -1 )
                            $(".firmanin-sorulari").find("select").eq(i).val($(".firmanin-sorulari").find("select").eq(i).find("option").eq(k).attr("value"))
                        
                        k++
                    }
                }
                else if(txt.indexOf("Şehir")!=-1){
                    $(".firmanin-sorulari").find("select").eq(i).val("-99")
                }
                else{
                    alert("manuel yapın")
                    console.log($(".firmanin-sorulari").find("select").eq(i).parent().html())
                    war=0
                }
                i++;
            }
            if($(".firmanin-sorulari").find(".textarea").length !=0 ){
                war=0
                alert("yazı yeri var")
            }
            $("#groupCompanyAccept").click()
            if(war){
                var btn = document.createElement("BUTTON");   
                btn.id = "aa";
                btn.setAttribute("onclick","ApplyJob()")
                document.body.appendChild(btn);
                document.getElementById("aa").click()
                close();close(); 
                
            }
        }  
        else{
            
            var btn = document.createElement("BUTTON");   
            btn.id = "aa";
            btn.setAttribute("onclick","ApplyJob()")
            document.body.appendChild(btn);
            document.getElementById("aa").click()
            close();close();
        }
    }, 2000);
    //setTimeout(function(){ $("#btnBasvuruTamamla").click() }, 2000);
    //setTimeout(function(){ close();close(); }, 2000);
}
else{
    c=000;
    while(1){
        if($("#txtSearchKeyword").val()==""){
            console.log("1")
            $("#txtSearchKeyword").val(arama[0])
            var btn = document.createElement("BUTTON");   
            btn.id = "kkk";
            btn.setAttribute("onclick",'$("#lnkNextPage").click();')
            document.body.appendChild(btn);
            document.getElementById("kkk").click()
        }
        else{
            /*for ( i of JSON.parse($("#hdnJobIdList").val())) {       
                setTimeout(function(){ 
                    var win = window.open("https://www.kariyer.net/basvuru-tamamlama/"+i, '_blank');
                    win.focus();	
                }, c);
                c=c+3000;
                if(t==1)
                    break;
                t++;
            }*/
            console.log("2")
            if($("#lnkNextPage").is(":visible")){
                console.log("2")
                var btn = document.createElement("BUTTON");   
                btn.id = "kk";
                btn.setAttribute("onclick",'$("#lnkNextPage").click();')
                document.body.appendChild(btn);
                document.getElementById("kk").click()
            }
            else{
                console.log("3")
                now=arama.findIndex(x=>x==$("#txtSearchKeyword").val()) 
                if(arama.length==now+1)
                break;
                $("#txtSearchKeyword").val(arama[now+1])
                var btn = document.createElement("BUTTON");   
                btn.id = "kkk";
                btn.setAttribute("onclick",'$("#lnkNextPage").click();')
                document.body.appendChild(btn);
                document.getElementById("kkk").click()
            }
        }
    }
    
    
}
    
