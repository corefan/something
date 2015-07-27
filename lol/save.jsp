<%@page contentType="text/html;charset=utf-8" %>
<%@page import="java.io.*"%>
<%
  request.setCharacterEncoding("utf-8");
  String data = request.getParameter("data");
  String name = request.getParameter("name");
  String idx = request.getParameter("idx");
  
  String filePath = "C:/apache-tomcat-6.0.35/webapps/git/something/MoGL/showcase/lol/" + name + idx + ".json";
  try{
  File f = new File(filePath);
  f.createNewFile();

  FileWriter fw = new FileWriter(filePath);
  fw.write(data);
  fw.close();
  }catch (IOException e) { 
    System.out.println(e.toString());
  }

%>