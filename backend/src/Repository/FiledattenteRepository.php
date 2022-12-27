<?php

namespace App\Repository;

use App\Entity\Filedattente;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Filedattente|null find($id, $lockMode = null, $lockVersion = null)
 * @method Filedattente|null findOneBy(array $criteria, array $orderBy = null)
 * @method Filedattente[]    findAll()
 * @method Filedattente[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FiledattenteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Filedattente::class);
    }

    // /**
    //  * @return Filedattente[] Returns an array of Filedattente objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Filedattente
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
