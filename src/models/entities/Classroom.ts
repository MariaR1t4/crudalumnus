import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Classroom {
    @PrimaryColumn()
    idClassroom: number;              
    @Column()
    idTeacher: number;            
    @Column()
    IdClass: number;          
    @Column()
    startClass: Date;       
    @Column()
    finishClass: Date;
}

export default Classroom;